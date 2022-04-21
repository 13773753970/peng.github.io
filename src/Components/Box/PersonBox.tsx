import React from "react";
import './PersonBox.css'

type Props = {
    // title: String
    image: string,
    name: string,
    position: string,
    onClick: () => void
}

function PersonBox(props: Props) {
    const {image, name, position, onClick} = props
    return (
        <div className="person-container" >
            <div className="inner-container" onClick={onClick}>
                <div className="box">
                    <div className="fill-content" style={{backgroundImage: `url(${image})`}}>
                    </div>
                </div>
                <div className="text-bg">
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export function BlankPersonBox() {
    return (
        <div className="person-container">

        </div>
    )
}

export default PersonBox