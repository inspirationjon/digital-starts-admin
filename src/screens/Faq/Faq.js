import React from 'react'

function Faq() {
	return (
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
	)
}

export default Faq
