import React from 'react'
import useToken from '../../hooks/useToken'

function Login() {
	const [setToken] = useToken(true)
	const [status, setStatus] = React.useState(null)

	function handleSubmitFaq(evt) {
		evt.preventDefault()

		const { user_login, user_password } = evt.target.elements
		var formdata = new FormData()
		formdata.append('login', user_login.value.trim())
		formdata.append('password', user_password.value.trim())

		var requestOptions = {
			method: 'POST',
			body: formdata,
		}

		fetch(process.env.REACT_APP_API_URL + '/login', requestOptions)
			.then((response) => response.json())
			.then((data) => {
				if (data.token) {
					setToken(data.token)
				} else {
					setStatus('Bunday admin mavjud emas :(')
				}
			})
	}
	return (
		<div>
			<form
				className='faq-from w-25 mt-5 m-auto flex-column'
				onSubmit={handleSubmitFaq}
				autoComplete='off'>
				<h2 className='h3 text-center mb-3'>Log In</h2>

				<div className='mb-3'>
					<label htmlFor='user_login' className='form-label'>
						Username
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='eshmat...'
						id='user_login'
						name='user_login'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='user_password' className='form-label'>
						Password
					</label>
					<input
						className='faq-form__unput form-control'
						type='password'
						placeholder='qwerty...'
						id='user_password'
						name='user_password'
					/>
				</div>

				<div className=''>
					<span className='text-danger'>{status}</span>
					<button
						className='d-block btn btn-primary ms-auto'
						type='submit'>
						send
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
