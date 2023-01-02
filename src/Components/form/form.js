import React, { useState } from "react";
import Header from "../Header/Header";
import "./form.css";
import heading from "../../images/Heading.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
const URL = process.env.REACT_APP_API || "http://localhost:5000"


const Form = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        phone: "",
        budget: "",
        type: "",
        location: ""
    })
    const handleChange = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(URL + "/enquiry", {
            name: data.name,
            phone: data.phone,
            budget: data.budget,
            type: data.type,
            location: data.location
        }).then((res) => {
            navigate("/thanks")

        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <>
            <Header />
            <div className="form-wrapper">
                <img src={heading} alt="Card" width="100%" height={200} />
                <p>Fill The Form Below We Will Reach Out to You!!</p>
                <h3>Enquiry Form</h3>
                <form className="enq-form" onSubmit={(e) => { handleSubmit(e) }}>
                    <input type={"text"} placeholder="Enter Your Name" id="name" value={data.name} onChange={(e) => { handleChange(e) }} />
                    <input type={"tel"} placeholder="Enter Your Contact Number" id="phone" value={data.phone} onChange={(e) => { handleChange(e) }} />
                    <input type={"text"} placeholder="Enter Your Budget" id="budget" value={data.budget} onChange={(e) => { handleChange(e) }} />
                    <input type={"text"} placeholder="Looking For Ex:- Plots/Residents" id="type" value={data.type} onChange={(e) => { handleChange(e) }} />
                    <input type={"text"} placeholder="Enter Location Looking For" id="location" value={data.location} onChange={(e) => { handleChange(e) }} />
                    <button type="submit">Submit</button>

                </form>
            </div>
            <Footer/>
        </>
    )
}


export default Form;