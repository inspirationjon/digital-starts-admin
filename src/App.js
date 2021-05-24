import React from 'react'
import './App.scss'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnauthenticatedApp from './UnauthenticatedApp.js'
import useToken from './hooks/useToken'

function App() {
	const [token, setToken] = useToken()

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/login', {
			method: 'GET',
			headers: {
				token,
			},
		}).then((response) => {
			if (response.status == 401) {
				setToken(false)
			}
		})
	}, [token])

	if (token) {
		return <AuthenticatedApp />
	} else {
		return <UnauthenticatedApp />
	}
}

export default App
