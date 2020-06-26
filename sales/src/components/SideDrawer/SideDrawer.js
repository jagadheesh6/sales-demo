import React from "react";

import './SideDrawer.css'
import Screen from './screen/screen'
import Logo from '../../css/login-css/images/saleslogo.jpg'

const SideDrawer = props => {
    
    // let attachedClasses = ["SideDrawer", ]

    return (
        <div className="SideDrawer">
            <div className="logo">
                <img src={Logo} width="100px" height="80px" />
            </div>
            <Screen to='#'> HOME </Screen>
            <Screen to='#'> DASHBOARD </Screen>
            <Screen to='#'> NEW OPORTUNITY </Screen>
            <Screen to='#'> EXISTING OPPORTUNITY </Screen>
        </div>
    )
}

export default SideDrawer