import React from 'react'
import './Footer.css'
import playstore from '../images/playstore.png'
import appstore from '../images/Appstore.png'
const Footer = () => {
    return (
        <div className="footer">

            <div className="div1">
                <h4>Download our App</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={appstore}></img>
                <img src={playstore}></img>


            </div>

            <div className="div2">
                <h1>SHOPZ</h1>
                <p>Best quality is our priority</p>
            </div>
            <div className="div3">
                <h2>Follow us</h2>

                <a>Linked in</a>
                <a>Instagram</a>
            </div>

        </div>
    )
}

export default Footer
