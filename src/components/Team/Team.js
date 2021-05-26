import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'

function Team() {
	const [token] = useToken()

	function handleSubmitTeam(evt) {
		evt.preventDefault()

		const formData = new FormData()
		const { member_image } = evt.target.elements
		formData.append('member_image', member_image.files[0])

		fetch(process.env.REACT_APP_API_URL + '/members', {
			method: 'POST',
			headers: {
				token,
			},
			body: formData,
		}).then(() => {
			refetch()
			member_image.value = null
		})
	}

	const {
		data: faq,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: 'members',
		queryFn: () => client('members'),
	})

	function handleDeleteTeam(evt) {
		const formData = new FormData()
		formData.append('member_id', evt.target.dataset.deletebtn)

		fetch(process.env.REACT_APP_API_URL + '/members', {
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
				onSubmit={handleSubmitTeam}
				autoComplete='off'>
				<h2 className='h3 mb-3'>Jamoa A'zolari</h2>

				<div className='mb-3'>
					<label htmlFor='member_image' className='form-label'>
						Jamoa A'zosi Rasmi
					</label>
					<input
						className='faq-form__unput form-control'
						type='file'
						id='member_image'
						name='member_image'
						required
					/>
				</div>

				<button
					className='btn-block btn btn-success ms-auto'
					type='submit'>
					Submit
				</button>
			</form>

			<table className='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Jamo a'zosi rasmi</th>
						<th>Jamoa a'zosini o'chirish</th>
					</tr>
				</thead>
				<tbody>
					{isSuccess &&
						faq?.map((item, index) => (
							<tr key={item.member_time + Math.random()}>
								<td>{index + 1}</td>
								<td>
									<img
										className='slide-table__img'
										src={
											process.env.REACT_APP_API_URL +
											'/images/' +
											item.member_img
										}
										alt='Team member'
										width='50'
										height='50'
									/>
								</td>
								<td>
									<button
										className='btn btn-danger'
										data-deletebtn={item.member_id}
										onDoubleClick={handleDeleteTeam}>
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

export default Team
