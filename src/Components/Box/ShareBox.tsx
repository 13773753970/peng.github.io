import React, { useEffect, useRef, useState } from 'react'
import ClipboardJS from 'clipboard'
import {loadJS} from '../../helper'
import './ShareBox.css'

type Props = {
    href: string,
    text: string,
}

function ShareBox(props: Props) {
    const {href, text} = props
    useEffect(() => {
        window.fbAsyncInit = function() {
            window.FB.init({
              appId            : '318053487118194',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v13.0'
            });
        };
        loadJS('fb-sdk', 'https://connect.facebook.net/en_US/sdk.js', () => {
            console.log('fb sdk load')
        })
        loadJS('twitter-sdk', 'https://platform.twitter.com/widgets.js', () => {
            console.log('twitter sdk load')
        })
        new ClipboardJS('#copy-href')
    }, [href])
    const urlParams = new URLSearchParams({text, url: href}).toString()
    // copied display control
    const [copied, _setCopied] = useState(false)
    let timer = useRef<NodeJS.Timeout | null>(null)
    const setCopied = () => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        _setCopied(true)
        timer.current = setTimeout(() => _setCopied(false), 3000)
    } 
    useEffect(() => {
        return () => {timer.current && clearTimeout(timer.current)}
    }, [])

    return (
        <div className ="share-box">
            <div className='btn' onClick={() => {
                if (!window.FB) return
                window.FB.ui({method: 'share', href: href});
            }}>
                <svg><use href='#icon-facebook'/></svg>
            </div>
            <a href={`https://twitter.com/intent/tweet?${urlParams}`} className='btn'>
                <svg><use href='#icon-twitter'/></svg>
            </a>
            <a href='https://www.linkedin.cn/' target="_blank" rel="noreferrer" className='btn'>
                <svg><use href='#icon-linked-in'/></svg>
            </a>
            <a href={`mailto:?subject= I want to share this with you&body=${text}%0D%0A${href}`} className='btn'>
                <svg><use href='#icon-envelope'/></svg>
            </a>
            <div id="copy-href" className='btn' data-clipboard-text={href} onClick={setCopied}>
                <svg><use href='#icon-link'/></svg>
                <div className={`copied ${copied ? 'fade-in' : 'fade-out'}`}>
                    copied
                </div>
            </div>
        </div>
    )
}

export default ShareBox