import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'

function Info() {
	const [token] = useToken()

	const { data: info } = useQuery({
		queryKey: 'info',
		queryFn: () => client('info'),
	})

	const info_address = React.useRef()
	const info_subtitle = React.useRef()
	const info_tel = React.useRef()
	const info_email = React.useRef()
	const info_yt_link = React.useRef()
	const info_google_link = React.useRef()

	React.useEffect(() => {
		if (info) {
			info_address.current.value = info.address
			info_subtitle.current.value = info.about
			info_tel.current.value = info.phone_number
			info_email.current.value = info.email
			info_yt_link.current.value = info.yt_video_link
			info_google_link.current.value = info.google_form_link
		}
	}, [info])

	const [response, setResponse] = React.useState()

	function handleSubmitInfo(evt) {
		evt.preventDefault()

		const {
			info_address,
			info_subtitle,
			info_tel,
			info_email,
			info_yt_link,
			info_google_link,
		} = evt.target.elements

		const formData = new FormData()
		formData.append('address', info_address.value.trim())
		formData.append('about', info_subtitle.value.trim())
		formData.append('phone_number', info_tel.value.trim())
		formData.append('email', info_email.value.trim())
		formData.append('yt_video_link', info_yt_link.value.trim())
		formData.append('google_form_link', info_google_link.value.trim())

		fetch(process.env.REACT_APP_API_URL + '/info', {
			method: 'POST',
			headers: { token },
			body: formData,
		})
			.then((response) => response.json())
			.then((response) => setResponse(response))
	}

	return (
		<>
			<form
				className='info-from w-50 m-5 flex-column'
				onSubmit={handleSubmitInfo}
				method='POST'>
				<h2 className='h3 mt-0'>Info Form</h2>
				<div className='mb-3'>
					<label htmlFor='info_address' className='form-label'>
						Address
					</label>
					<input
						ref={info_address}
						className='info-form__unput form-control'
						type='text'
						placeholder='Address'
						id='info_address'
						name='info_address'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='info_subtitle' className='form-label'>
						About
					</label>
					<input
						ref={info_subtitle}
						className='info-form__unput form-control'
						type='text'
						placeholder='About'
						id='info_subtitle'
						name='info_subtitle'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='info_tel' className='form-label'>
						Phone number
					</label>
					<input
						ref={info_tel}
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_tel'
						name='info_tel'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='info_email' className='form-label'>
						Email
					</label>
					<input
						ref={info_email}
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_email'
						name='info_email'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='info_yt_link' className='form-label'>
						You tube video Link
					</label>
					<input
						ref={info_yt_link}
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_yt_link'
						name='info_yt_link'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='info_google_link' className='form-label'>
						Google form Link
					</label>
					<input
						ref={info_google_link}
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_google_link'
						name='info_google_link'
					/>
				</div>
				<button
					className='d-flex align-items-center justify-center btn btn-success ms-auto'
					type='submit'>
					{response ? (
						<svg
							width='18'
							height='18'
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M5 13l4 4L19 7'
							/>
						</svg>
					) : (
						'Save'
					)}
				</button>
			</form>
		</>
	)
}

export default Info
