import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

const AddContact = () => {
    const { id } = useParams();

    const { actions, store } = useContext(Context)
    const navigate = useNavigate();
    console.log(id);
    const editContact = store.contacts.find(contact => contact.id == id);
    console.log(editContact);
    const [name, setName] = useState(id ? editContact.name : "");
    const [phone, setPhone] = useState(id ? editContact.phone : "");
    const [email, setEmail] = useState(id ? editContact.email : "");
    const [address, setAddress] = useState(id ? editContact.address : "");
    const handleSubmit = (e) => {
        e.preventDefault()
       if(id) {
        //llamar al método que actualiza el contacto
        actions.editContact(id, name, phone, email, address);
       }
       else {
        actions.createContact(name, phone, email, address);
       }
        
        navigate("/");
    }



    return (
        <div>
            <div className="container mt-5">
                <h1>Add contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Link to={"/"} >Go back</Link>
            </div>
        </div>
    )

}

export default AddContact