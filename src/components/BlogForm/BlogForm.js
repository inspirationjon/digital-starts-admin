import React from 'react'
import useToken from '../../hooks/useToken'

function BlogForm({ blogContent }) {
	const [token] = useToken()

	console.log(blogContent)
	function handleSubmitBlog(evt) {
		evt.preventDefault()

		const {
			blog_image,
			blog_title,
			blog_author,
			blog_author_picture,
			blog_author_link,
			blog_reading_time,
			blog_like,
			blog_tags,
			blog_text,
		} = evt.target.elements

		const formData = new FormData()
		formData.append('blog_image', blog_image.files[0])
		formData.append('blog_title', blog_title.value.trim())
		formData.append('blog_content', JSON.stringify(blogContent?.ops))
		formData.append('blog_author', blog_author.value.trim())
		formData.append('blog_author_picture', blog_author_picture.files[0])
		formData.append('blog_author_link', blog_author_link.value.trim())
		formData.append('blog_reading_time', blog_reading_time.value.trim())
		formData.append('blog_like', blog_like.value.trim())
		formData.append('blog_tags', blog_tags.value.trim())
		formData.append('blog_text', blog_text.value.trim())

		fetch(process.env.REACT_APP_API_URL + '/blogs', {
			method: 'POST',
			headers: {
				token,
			},
			body: formData,
		})
	}
	return (
		<form
			className='faq-from w-50 m-5 d-flex flex-column'
			onSubmit={handleSubmitBlog}
			autoComplete='off'>
			<h2 className='h3 mb-3'>Blog Yarating</h2>

			<div className='mb-3 '>
				<label htmlFor='blog_image' className='form-label'>
					Blog Image
				</label>
				<input
					className='faq-form__unput form-control'
					type='file'
					placeholder='Answer'
					id='blog_image'
					name='blog_image'
					required
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='blog_title' className='form-label'>
					Blog Sarlavhasi
				</label>
				<input
					className='faq-form__Input form-control'
					type='text'
					placeholder='Question'
					id='blog_title'
					name='blog_title'
					required
				/>
			</div>

			<div className='mb-3 '>
				<label htmlFor='blog_author' className='form-label'>
					Blog Muallifi Ismi
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_author'
					name='blog_author'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_author_picture' className='form-label'>
					Blog Muallifi Rasmi
				</label>
				<input
					className='faq-form__unput form-control'
					type='file'
					placeholder='Answer'
					id='blog_author_picture'
					name='blog_author_picture'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_author_link' className='form-label'>
					Blog Muallifi Linki
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_author_link'
					name='blog_author_link'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_reading_time' className='form-label'>
					Blog O'qib Chiqish Vaqti
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_reading_time'
					name='blog_reading_time'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_like' className='form-label'>
					Blog Like
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_like'
					name='blog_like'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_tags' className='form-label'>
					Blog Taglari
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_tags'
					name='blog_tags'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_text' className='form-label'>
					Blog Matni
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder='Answer'
					id='blog_text'
					name='blog_text'
					required
				/>
			</div>

			<button className='btn-block btn btn-success ms-auto' type='submit'>
				Add
			</button>
		</form>
	)
}

export default BlogForm
