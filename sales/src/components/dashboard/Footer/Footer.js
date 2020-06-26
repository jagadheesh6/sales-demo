import React from 'react'

import './Footer.css'
import customerCare from "../../../css/login-css/images/customerCare.png";

const Footer = props => (
    <div className='Footer'>
        <div className="inner">
          &nbsp;&nbsp;&nbsp;POWERED BY SALESOPZ
        </div>
        <img src={customerCare} alt="customerCare" height="80px" width="100px" />
    </div>
)

export default Footer