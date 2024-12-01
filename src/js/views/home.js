import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router";

export const Home = () => {
	const navigate = useNavigate()
	const { actions, store } = useContext(Context)
	console.log(store);
	

	return (
		<div className="container text-center mt-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>Contact list</h1>
				<button className="btn-primary" onClick={() => navigate("/addContact")}> Create contact
				</button>
			</div>


			{store.contacts.length > 0 ? (
				store.contacts.map((contact, index) => (
					<div key={index} className="card mb-3">
						<div className="card-body d-flex justify-content-between align-items-center">
						<div className="fs-1 custom"><i className="fa-solid fa-user custom-person"></i></div>
							<div>
								<h5 className="card-title">{contact.name}</h5>
								<p className="card-text mb-1">
									<i className="fa fa-phone me-2"></i>{contact.phone}
								</p>
								<p className="card-text">
									<i className="fa fa-envelope me-2"></i>{contact.email}
								</p>
							</div>
							<button className="btn btn-danger" onClick={()=> actions.deleteContact(contact.id)}>
								<i className="fa fa-trash"></i>
							</button>
						</div>
					</div>
				))
			) : (
				<p>No contacts available. Add some!</p>
			)}
		</div>
	)
};
