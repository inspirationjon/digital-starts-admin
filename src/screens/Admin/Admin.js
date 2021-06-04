import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'

function Admin() {
	const [token] = useToken()

	const {
		data: admin,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: 'admin',
		queryFn: () => client('admin', { token }),
	})

	function handleSubmitAdmin(evt) {
		evt.preventDefault()

		const formData = new FormData()
		const { admin_username, admin_password } = evt.target.elements
		formData.append('user_login', admin_username.value.trim())
		formData.append('user_password', admin_password.value.trim())

		fetch(process.env.REACT_APP_API_URL + '/admin', {
			method: 'POST',
			headers: {
				token,
			},
			body: formData,
		}).then(() => {
			refetch()
			admin_username.value = null
			admin_password.value = null
		})
	}

	function handleDeleteFaq(evt) {
		const formData = new FormData()
		formData.append('user_id', evt.target.dataset.deletebtn)

		fetch(process.env.REACT_APP_API_URL + '/admin', {
			method: 'DELETE',
			headers: {
				token,
			},
			body: formData,
		}).then(() => refetch())
	}
	return (
		<>
			<form
				className='faq-from w-50 m-5 d-flex flex-column'
				onSubmit={handleSubmitAdmin}
				autoComplete='off'>
				<h2 className='h3 mb-3'>Admin Qo'shish</h2>

				<div className='mb-3'>
					<label htmlFor='admin_username' className='form-label'>
						Admin username
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='username'
						id='admin_username'
						name='admin_username'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='admin_password' className='form-label'>
						Admin password
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='password'
						id='admin_password'
						name='admin_password'
					/>
				</div>

				<button className='btn-block btn btn-success ms-auto' type='submit'>
					Add
				</button>
			</form>

			<table className='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Username</th>
						<th>Adminni o'chirish</th>
					</tr>
				</thead>
				<tbody>
					{isSuccess &&
						admin?.map((item, index) => (
							<tr key={Math.random()}>
								<td>{index + 1}</td>
								<td>{item.user_login}</td>
								<td>
									<button
										className='btn btn-danger'
										data-deletebtn={item.user_id}
										onDoubleClick={handleDeleteFaq}>
										o'chirish
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}

export default Admin
