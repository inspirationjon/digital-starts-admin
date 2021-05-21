import React from 'react'

function Slider() {
	return (
		<form className='slider-from w-50 m-5 flex-column'>
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
			<button className='btn btn-primary ms-auto' type='submit'>
				Submit
			</button>
		</form>
	)
}

export default Slider
