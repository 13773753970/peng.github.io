import React from "react";
import './PersonBox.css'

type Props = {
    // title: String
    image: String
    onClick: () => void
}

function PersonBox(props: Props) {
    const {image, onClick} = props
    return (
        <div className="person-container" >
            <div className="box" onClick={onClick}>
                <div className="fill-content" style={{backgroundImage: `url(${image})`}}>
                    {/* <p>{title}</p> */}
                </div>
            </div>
        </div>
    )
}

export default PersonBox