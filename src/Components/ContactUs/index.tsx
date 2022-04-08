import React from "react";
import './index.css'

type Props = {
    forwardRef?: React.MutableRefObject<HTMLDivElement | null>
}

function ContactUs(props: Props) {
    return (
        <div ref={ref => {
            if (props.forwardRef !== undefined) {
                props.forwardRef.current = ref
            }
        }} className="cta-container" id="cta-container">
            <div className="red-cover">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>If you are interesting in joining our group for phd program, partnership, volunteer job, please contact us.</p>
                    <ul>
                        <li>
                            <svg><use href="#icon-envelope-open"></use></svg>
                            <a href="/">Arif's email: arif.khan@nuaa.edu.cn</a>
                        </li>
                        <li>
                            <svg><use href="#icon-envelope-open"></use></svg>
                            <a href="/">Aalen's email: arif.khan@nuaa.edu.cn</a>
                        </li>
                        <li>
                            <svg><use href="#icon-envelope-open"></use></svg>
                            <a href="/">Manhi's email: arif.khan@nuaa.edu.cn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactUs