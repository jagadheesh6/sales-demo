import React from 'react'

import Header from './Header/header'
import SideDrawer from '../SideDrawer/SideDrawer'
import Hamburger from '../SideDrawer/Hamburger/Hamburger'
import Footer from './Footer/Footer'
import Content from './Content/Content'

const Dashboard = props => {
    return(
        // style={{width: '100vw', height: '100vh', position: "relative"}}
        <div>
            <Header />
            <SideDrawer />
            <Hamburger />
            <Content />
            <Footer />
        </div>
    )
}

export default Dashboard