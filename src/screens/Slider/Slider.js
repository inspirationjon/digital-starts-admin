import React from 'react'
import './Slider.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function Slider() {
	const { data: slides, isSuccess } = useQuery({
		queryKey: 'slides',
		queryFn: () => client('slide'),
	})

	isSuccess && console.log(slides)
	return (
		<section className='slider p-5'>
			<form className='slider-from w-50 mb-5 flex-column'>
				<h2 className='h3 mt-0'>Slider Form</h2>
				<div className='mb-3 '>
					<label htmlFor='slide_title' className='form-label'>
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
					<label htmlFor='slide_subtitle' className='form-label'>
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
					<label htmlFor='slide_file' className='form-label'>
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
			<table className='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Slide sarlavhasi</th>
						<th scope='col'>Slide ta'rifi</th>
						<th scope='col'>Slide rasmi</th>
						<th scope='col'>Slideni o'chirish</th>
					</tr>
				</thead>
				<tbody>
					{isSuccess &&
						slides.map((slide, index) => (
							<tr>
								<th scope='row' key={slide.slide_time}>
									{index + 1}
								</th>
								<td>{slide.slide_title}</td>
								<td>{slide.slide_title}</td>
								<td>
									<img
										className='slide-table__img'
										src={
											process.env.REACT_APP_API_URL +
											'/images/' +
											slide.slide_img_src
										}
										alt={slide.slide_title}
										width='50'
										height='50'
									/>
								</td>
								<td className=' text-decoration-underline cursor-pointer'>
									<button className='btn btn-danger'>
										o'chirish
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	)
}

export default Slider
