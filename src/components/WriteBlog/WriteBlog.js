import React from 'react'
import { useQuill } from 'react-quilljs'
import BlogForm from '../BlogForm/BlogForm'
import 'quill/dist/quill.snow.css'

function WriteBlog() {
	const [status, setStatus] = React.useState('')
	const [blogContent, setBlogContent] = React.useState(null)
	const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		['link', 'image', 'video'],
		[{ header: 1 }, { header: 2 }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ direction: 'rtl' }],
		[{ size: ['small', false, 'large', 'huge'] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ font: [] }],
		[{ align: [] }],
		['clean'],
	]

	const counterRef = React.useRef()
	const { quill, quillRef, Quill } = useQuill({
		modules: {
			counter: true,
			toolbar: toolbarOptions,
		},
	})

	if (Quill && !quill) {
		Quill.register('modules/counter', function (quill) {
			quill.on('text-change', function () {
				const text = quill.getText()
				const content = quill.getContents()
				console.log(quill.getText())
				setBlogContent(JSON.stringify(content.ops))

				counterRef.current.innerText = text.split(/\s+/).length - 1
				setStatus(text?.split(/\s+/)?.length - 1)
			})
		})
	}

	return (
		<>
			<div className='mx-4 mt-4' style={{ marginBottom: '150px' }}>
				<div style={{ maxWidth: 900, height: 400 }}>
					<div ref={quillRef} />

					<div className='p-2 d-flex align-items-center'>
						{status > 0 ? (
							<>
								<div ref={counterRef}>
									So'zlar soni: <strong ref={counterRef} />
								</div>
							</>
						) : (
							<>
								<div className='text-danger' ref={counterRef}>
									Blog kiriting
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<BlogForm blogContent={blogContent} />
		</>
	)
}

export default WriteBlog
