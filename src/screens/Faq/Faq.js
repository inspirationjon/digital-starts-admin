import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'

function Faq() {
	const [token] = useToken()

	function handleSubmitFaq(evt) {
		evt.preventDefault()

		const formData = new FormData()
		const { faq_question, faq_answer } = evt.target.elements
		formData.append('faq_question', faq_question.value.trim())
		formData.append('faq_answer', faq_answer.value.trim())

		fetch(process.env.REACT_APP_API_URL + '/faq', {
			method: 'POST',
			headers: {
				token,
			},
			body: formData,
		}).then(() => {
			refetch()
			faq_question.value = null
			faq_answer.value = null
		})
	}

	const {
		data: faq,
		isSuccess,
		refetch,
	} = useQuery({
		queryKey: 'faq',
		queryFn: () => client('faq'),
	})

	function handleDeleteFaq(evt) {
		const formData = new FormData()
		formData.append('faq_id', evt.target.dataset.deletebtn)

		fetch(process.env.REACT_APP_API_URL + '/faq', {
			method: 'DELETE',
			headers: {
				token,
			},
			body: formData,
		}).then(() => refetch())
	}
	return (
		<>
			<form
				className='faq-from w-50 m-5 flex-column'
				onSubmit={handleSubmitFaq}
				autoComplete='off'>
				<h2 className='h3 mb-3'>FAQ Form</h2>

				<div className='mb-3'>
					<label htmlFor='faq_question' className='form-label'>
						FAQ Question
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='Question'
						id='faq_question'
						name='faq_question'
					/>
				</div>
				<div className='mb-3 '>
					<label htmlFor='faq_answer' className='form-label'>
						FAQ Answer
					</label>
					<input
						className='faq-form__unput form-control'
						type='text'
						placeholder='Answer'
						id='faq_answer'
						name='faq_answer'
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
						<th scope='col'>Savol</th>
						<th scope='col'>Javob</th>
						<th scope='col'>FAQni o'chirish</th>
					</tr>
				</thead>
				<tbody>
					{isSuccess &&
						faq?.map((item, index) => (
							<tr key={item.faq_created + Math.random()}>
								<td scope='row'>{index + 1}</td>
								<td>{item.faq_question}</td>
								<td>{item.faq_answer}</td>
								<td>
									<button
										className='btn btn-danger'
										data-deletebtn={item.faq_id}
										onDoubleClick={handleDeleteFaq}>
										o'chirish
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}

export default Faq
