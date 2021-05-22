import React from 'react'

function Slider() {
	return (
		<section className='slider p-5'>
			<form className='slider-from w-50 mb-5 flex-column'>
				<h2 className='h3 mt-0'>Slider Form</h2>
				<div className='mb-3 '>
					<label for='slide_title' class='form-label'>
						Title
					</label>
					<input
						className='slider-form__unput form-control'
						type='text'
						placeholder='Slide title'
						id='slide_title'
						name='slide_title'
					/>
				</div>
				<div className='mb-3 '>
					<label for='slide_subtitle' class='form-label'>
						Subtitle
					</label>
					<input
						className='slider-form__unput form-control'
						type='text'
						placeholder='Slide subtitle'
						id='slide_subtitle'
						name='slide_subtitle'
					/>
				</div>
				<div className='mb-3 '>
					<label for='slide_file' class='form-label'>
						File
					</label>
					<input
						className='slider-form__unput form-control'
						type='file'
						placeholder='Slide subtitle'
						id='slide_file'
						name='slide_file'
					/>
				</div>
				<button
					className='btn btn-primary d-block ms-auto'
					type='submit'>
					Submit
				</button>
			</form>

			<h2 className='h3'>Mavjud Slidelar</h2>
			<table class='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Slide sarlavhasi</th>
						<th scope='col'>Slide ta'rifi</th>
						<th scope='col'>Slideni o'chirish</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Eshmat</td>
						<td>Toshmat</td>
						<td className=' text-decoration-underline cursor-pointer'>
							<button className='btn btn-danger'>
								o'chirish
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default Slider
