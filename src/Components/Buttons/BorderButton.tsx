import React from "react";
import './BorderButton.css'

type Props = {
    text: String
}

function BorderButton(props: Props) {
    const {text} = props
    return (
        <a className="border-button" href="/">{text}</a>
    )
}

export default BorderButton