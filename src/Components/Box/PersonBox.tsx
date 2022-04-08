import React from "react";
import './PersonBox.css'

type Props = {
    title: String
    image: String
}

function PersonBox(props: Props) {
    const {title, image} = props
    return (
        <div className="person-container" >
            <div className="box">
                <div className="fill-content" style={{backgroundImage: `url(${image})`}}>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonBox