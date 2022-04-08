import React, { useEffect, useRef, useState } from 'react'
import throttleListeners from 'throttle-listeners'
import { debounce } from 'throttle-debounce'
import {eventEmitter, getWidthScope, WidthScope} from '../../helper'
import './index.css'

type Region = {title: string, domRef: React.MutableRefObject<HTMLElement | null>}

type Props = {
    regions: Region[]
}

function Header(props: Props) {
    const [sticky, setSticky] = useState(!(window.scrollY >= 0 && window.scrollY < 80))
    const [currentRegion, setCurrentRegion] = useState(getCurrentRegion(props.regions, window.innerHeight))
    const headerHeightRef = useRef(getWidthScope(window.innerWidth) === WidthScope.SmallWidth ? 80 : 110)
    const [mobileHeaderActive, setMobileHeaderActive] = useState(false)
    useEffect(() => {
        // 组建挂载好了更新region
        setCurrentRegion(getCurrentRegion(props.regions, window.innerHeight))
        //headerHeight 与css里面同步
        function headerHeightListener(widthScope: WidthScope) {
            headerHeightRef.current = widthScope === WidthScope.SmallWidth ? 80 : 110
        }
        eventEmitter.on('widthChange', headerHeightListener)
        // sticky
        const removeStickyListener = throttleListeners(
            [{
                getDefaultValue: () => window.scrollY, 
                addListener: (callback: any) => eventEmitter.on('scroll', callback),
                removeListener: (callback: any) => eventEmitter.removeListener('scroll', callback)
            }],
            (scrollY: number) => scrollY >= 0 && scrollY < 80,
            (lessThan: boolean) => setSticky(!lessThan),
            (callback: any) => debounce(200, false, callback)
        )
        // 自动检测当前在哪块区域
        const removeRegionListener = throttleListeners(
            [
                {
                    getDefaultValue: () => window.scrollY, 
                    addListener: (callback: any) => eventEmitter.on('scroll', callback), 
                    removeListener: (callback: any) => eventEmitter.removeListener('scroll', callback)
                },
                {
                    getDefaultValue: () => ({x: window.innerWidth, y: window.innerHeight}), 
                    addListener: (callback: any) => eventEmitter.on('resize', callback), 
                    removeListener: (callback: any) => eventEmitter.removeListener('resize', callback)
                },
            ],
            (scrollY: number, {y: windowHeight}: {y: number}) => getCurrentRegion(props.regions, windowHeight),
            (name: string) => setCurrentRegion(name),
            (callback: any) => debounce(200, false, callback)
        )
        return () => {
            eventEmitter.off('widthChange', headerHeightListener)
            removeStickyListener()
            removeRegionListener()
        }
    }, [props.regions])
    return (
        <div className={`main-menu ${sticky ? 'is-sticky' : ''}`} id="main-menu">
            <div className="container">
                <nav className="navbar">
                    <a className="navbar-brand" href="/">
                        Digital Transformation Lab
                    </a>
                    <div className="navbar-collapse">
                        <svg onClick={() => setMobileHeaderActive(!mobileHeaderActive)} id="menu-button" className={`menu-button ${mobileHeaderActive ? 'active' : ''}`} viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="30" />
                            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                            <path className="line--2" d="M0 50h70" />
                            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                        </svg>
                        <ul className="navbar-nav">
                            {props.regions.map(x => (
                                <li className={`${currentRegion === x.title ? 'active' : ''} nav-item`} key={x.title}>
                                    <button onClick={() => {
                                        if (x.domRef.current !== null) {
                                            window.scrollTo({
                                                top: x.domRef.current.offsetTop - headerHeightRef.current - 10,
                                                behavior: 'smooth'
                                            })
                                        }
                                    }} className="nav-link">{x.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className={`mobile-menu ${mobileHeaderActive ? 'active' : ''}`} id="mobile-menu">
                {props.regions.map(x => (
                    <li onClick={() => {
                        setMobileHeaderActive(false)
                        if (x.domRef.current !== null) {
                            window.scrollTo({
                                top: x.domRef.current.offsetTop - headerHeightRef.current - 10,
                                behavior: 'smooth'
                            })
                        }
                    }} className={`${currentRegion === x.title ? 'active' : ''}`} key={x.title}>
                        <button >{x.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
} 

function getCurrentRegion(regions: Region[], windowHeight: number): string {
    const windowHeightHalf = windowHeight / 2
    if (regions.length !== 0) {
        if (regions[0].domRef.current === null || regions[regions.length - 1].domRef.current === null) {
            return ''
        }
        const firstRect = regions[0].domRef.current!.getBoundingClientRect()
        const lastRect = regions[regions.length - 1].domRef.current!.getBoundingClientRect()
        if (firstRect.height < windowHeightHalf && -firstRect.top < firstRect.height / 3) {
            return regions[0].title
        } 
        if (lastRect.height < windowHeightHalf && (lastRect.top + lastRect.height - windowHeight) < lastRect.height / 3) {
            return regions[regions.length - 1].title
        } 
    }
    for (let i = 0; i < regions.length; i++) {
        if (regions[i].domRef.current === null) {
            break
        }
        const rect = regions[i].domRef.current!.getBoundingClientRect()
        if (windowHeightHalf >= rect.top && windowHeightHalf < rect.top + rect.height) {
            return regions[i].title
        }
    }
    return ''
}

export default Header