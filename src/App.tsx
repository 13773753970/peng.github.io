import { debounce } from 'throttle-debounce'
import throttleListeners from 'throttle-listeners'
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home'
import ProjectPage from './Pages/Project'
import ProfilePage from './Pages/Profile'
import {eventEmitter, getWidthScope, WidthScope} from './helper'
import Page404 from './Pages/404'

function App() {
    useEffect(() => {
        function resizeListener() {
            eventEmitter.emit('resize', {x: window.innerWidth, y: window.innerHeight})
        }
        function scrollListener() {
            eventEmitter.emit('scroll', window.scrollY)
        }
        window.addEventListener('resize', resizeListener)
        window.addEventListener('scroll', scrollListener)
        const removeWidthListener = throttleListeners(
            [{
                getDefaultValue: () => ({x: window.innerWidth, y: window.innerHeight}), 
                addListener: (callback: any) => eventEmitter.on('resize', callback),
                removeListener: (callback: any) => eventEmitter.removeListener('resize', callback)
            }],
            ({x: width} : {x: number}) => getWidthScope(width),
            (state: WidthScope) => {
                setTimeout(() => eventEmitter.emit('widthChange', state), 0)
            },
            (callback: any) => debounce(200, false, callback)
        )
        return () => {
            window.removeEventListener('resize', resizeListener)
            window.removeEventListener('scroll', scrollListener)
            removeWidthListener()
        }
    }, [])
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/projects/:projectLink' element={<ProjectPage/>}/>
            <Route path="/people/:id" element={<ProfilePage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}

export default App