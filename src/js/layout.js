import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import AddContact from "./views/addContact.jsx";



const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="/editContact/:id" element={<AddContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
