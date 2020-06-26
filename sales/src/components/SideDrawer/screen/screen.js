import React from 'react'

import './screen.css'

const Screen = props => (
    <a href={props.to} className="Screen">
        {props.children}
    </a>
)

export default Screen