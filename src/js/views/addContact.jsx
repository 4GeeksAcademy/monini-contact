import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Home } from "./home";

const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(name, phone, email, address);
        navigate("/"); 
    }
    

    return (
        <div>
            <div className="container mt-5">
                <h1>Add contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Link to={"/"} >Go back</Link>
            </div>
        </div>
    )

}

export default AddContact