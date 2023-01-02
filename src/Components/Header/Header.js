import React from 'react';
import "./header.css";
import logo from "../../images/logo.png";
import { FaHome, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleContactRoute = () => {
        navigate("/contactus")

    }
    const handleHomeRoute = () => {
        navigate("/")
    }
    return (
        <>
            <div className='head-wrapper'>
                <img src={logo} alt="logopng" />
                <div className='btns'>
                    <button><FaHome onClick={handleHomeRoute} size={"3em"} color={"gray"} /></button>
                    <button><FaPhone onClick={handleContactRoute} size={"3em"} color={"gray"} /></button>
                </div>
            </div>
        </>
    )
}


export default Header;