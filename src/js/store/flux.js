const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []

		},
		actions: {
			getMycontacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/moninilat/contacts')
					.then(response => response.json()
						.then(responseJson => {
							const newContacts = responseJson.contacts;
							setStore({ contacts: newContacts });
						})

					)

			},
			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/moninilat", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify()
					})
					const result = await response.json()
					return result
				}
				catch (error) {
					console.log(error)
				}
			},

			createContact: async (name, phone, email, address) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/moninilat/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: name,
							phone: phone,
							email: email,
							address: address
						})
					})

					const result = await response.json()
					return result
				}
				catch (error) {
					console.log(error)
				}
			},
			
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/moninilat/contacts/${id}`, {
						method: "DELETE",

					});
					if (response.ok) {
						const actions = getActions();
						actions.getMycontacts();
					}
				} catch (error) {
					console.log(error);
					
				}
			}	

		}

	}
};


export default getState;
