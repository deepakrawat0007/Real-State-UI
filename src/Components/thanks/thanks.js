import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import "./thanks.css"

const Thanks = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
    })
    return (
        <>
            <Header />
            <div className="Wrapper">
                <h1>Thanks for Filling Up the Form We Will get back to you very soon!!</h1>
            </div>
            <Footer/>
        </>
    )
}

export default Thanks;