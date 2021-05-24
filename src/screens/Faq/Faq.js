import React from 'react'

function Faq() {
	return (
		<>
			<form className='faq-from w-50 m-5 flex-column'>
				<h2 className='h3 mb-3'>FAQ Form</h2>

				<div className='mb-3'>
					<label for='faq_address' class='form-label'>
						FAQ Question
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='Question'
						id='faq_address'
						name='faq_address'
					/>
				</div>
				<div className='mb-3 '>
					<label for='faq_subtitle' class='form-label'>
						FAQ Answer
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='Answer'
						id='faq_subtitle'
						name='faq_subtitle'
					/>
				</div>

				<button className='btn btn-primary ms-auto' type='submit'>
					Submit
				</button>
			</form>

			<table className='numbers-table table table-striped w-50 m-4'>
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

export default Faq
