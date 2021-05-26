import React from 'react'
import useToken from '../../hooks/useToken'

function BlogForm({ blogContent, blogText }) {
	const [token] = useToken()

	const [todos, setTodos] = React.useState([])

	const elTodoInput = React.useRef(null)

	const tagsArr = todos.map((todo) => {
		return todo.text
	})

	function handleAddTodo() {
		if (!elTodoInput.current.value) {
			return
		}

		let newTodo = {
			id: todos.length,
			text: elTodoInput.current.value.trim(),
		}

		todos.push(newTodo)
		tagsArr.push(newTodo.text)
		setTodos([...todos])
		elTodoInput.current.value = null
	}

	function handleDeleteTodo(evt) {
		const newTodos = [...todos]
		newTodos.splice(evt.target.dataset.deleteid, 1)
		setTodos(newTodos)
	}

	function handleSubmitBlog(evt) {
		evt.preventDefault()

		const {
			blog_image,
			blog_title,
			blog_author,
			blog_author_picture,
			blog_author_link,
			blog_theme,
		} = evt.target.elements

		const formData = new FormData()
		formData.append('blog_image', blog_image.files[0])
		formData.append('blog_title', blog_title.value.trim())
		formData.append('blog_content', JSON.stringify(blogContent))
		formData.append('blog_author', blog_author.value.trim())
		formData.append('blog_author_picture', blog_author_picture.files[0])
		formData.append('blog_author_link', blog_author_link.value.trim())
		formData.append('blog_tags', JSON.stringify(tagsArr))
		formData.append('blog_text', blogText)
		formData.append('blog_theme', blog_theme.value.trim())

		var requestOptions = {
			method: 'POST',
			headers: {
				token,
			},
			body: formData,
		}

		fetch(process.env.REACT_APP_API_URL + '/blogs', requestOptions)
			.then((response) => response.text())
			.then((result) => (result ? alert("Qo'shildi") : null))
			.catch((error) => console.log('error', error))

		blogContent = []
		setTodos([])
		evt.target.reset()
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
					placeholder='Sarlavha...'
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
					placeholder='Ism'
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
					placeholder='Link...'
					id='blog_author_link'
					name='blog_author_link'
					required
				/>
			</div>

			<div className='mb-3 '>
				<label htmlFor='blog_theme' className='form-label'>
					Maqola Yo'nalishi
				</label>
				<input
					className='faq-form__unput form-control'
					type='text'
					placeholder="Yo'nalish nomi..."
					id='blog_theme'
					name='blog_theme'
					required
				/>
			</div>
			<div className='mb-3 '>
				<label htmlFor='blog_tags' className='form-label'>
					Maqola Taglari
				</label>
				<div className='d-flex'>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='tag...'
						id='blog_tags'
						name='blog_tags'
						ref={elTodoInput}
					/>
					<button
						className='btn btn-primary ms-2'
						onClick={handleAddTodo}
						type='button'>
						+
					</button>
				</div>

				<ul className='list-unstyled mt-2'>
					{todos.length > 0 &&
						todos.map((todo, index) => (
							<li
								className='d-flex p-2 border-bottom'
								key={index}>
								{todo.text}
								<button
									className='ms-auto btn btn-danger'
									data-deleteid={index}
									type='button'
									onClick={handleDeleteTodo}>
									o'chirish
								</button>
							</li>
						))}
				</ul>
			</div>

			<button className='btn-block btn btn-success ms-auto' type='submit'>
				Add
			</button>
		</form>
	)
}

export default BlogForm
