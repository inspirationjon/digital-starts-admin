import React from 'react'

function Number() {
	return (
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
	)
}

export default Number
