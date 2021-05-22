import React from 'react'

function Info() {
	return (
		<>
			<form className='info-from w-50 m-5 flex-column'>
				<h2 className='h3 mt-0'>Info Form</h2>
				<div className='mb-3'>
					<label for='info_address' class='form-label'>
						Address
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='Address'
						id='info_address'
						name='info_address'
					/>
				</div>
				<div className='mb-3 '>
					<label for='info_subtitle' class='form-label'>
						About
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='About'
						id='info_subtitle'
						name='info_subtitle'
					/>
				</div>
				<div className='mb-3 '>
					<label for='info_tel' class='form-label'>
						Phone number
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_tel'
						name='info_tel'
					/>
				</div>
				<div className='mb-3 '>
					<label for='info_email' class='form-label'>
						Email
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_email'
						name='info_email'
					/>
				</div>
				<div className='mb-3 '>
					<label for='info_tel' class='form-label'>
						You tube video Link
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_tel'
						name='info_tel'
					/>
				</div>
				<div className='mb-3 '>
					<label for='info_from_link' class='form-label'>
						Google form Link
					</label>
					<input
						className='info-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='info_from_link'
						name='info_from_link'
					/>
				</div>
				<button className='btn btn-primary ms-auto' type='submit'>
					Submit
				</button>
			</form>

			<table class='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Sana</th>
						<th scope='col'>Telefon Raqam</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td className=' text-decoration-underline cursor-pointer'>
							<a href='tel:+990902023'>+990902023</a>
						</td>
					</tr>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td className='text-decoration-underline cursor-pointer'>
							<a href='tel:+990902023'>+990902023</a>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default Info
