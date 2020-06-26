import React from 'react'

import './Content.css'
import Chart1 from '../../../css/login-css/images/Chart1.png'
import Chart2 from '../../../css/login-css/images/Chart2.jpg'
import Chart3 from '../../../css/login-css/images/Chart3.png'

const Content = props => (
    <div className="Content">
        <div className="left">
            <img src={Chart1} alt="Chart 1" width = "300px" height = "200px" /><br/><br/>
            <img src={Chart2} alt="Chart 2" width = "300px" height = "200px" />
        </div>
        <div className='right'>
            <img src={Chart3} alt="Chart 3" width = "240px" height = "200px" />
        </div>
    </div>
)

export default Content