import React from "react";
import logo512 from '../../Pictures/logo512.png'

const Header = () => {


    return (
        <div className="header">
            <div className="logo">
                <img className="imgLogo" src={logo512} alt="Made To Order Logo"/>
            </div>
            <div className="title">
                <h1>Made To Order Websites</h1>
            </div>
            
            <div className="serviceList">
                <ul>
                    <li>Website Development</li>
                    <li>Web Application Design and Development</li>
                    <li>Website Maintenance and Support</li>
                </ul>
            </div>

        </div>

    )
}

export default Header