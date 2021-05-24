import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'
import TableControllers from '../TableControllers/TableControllers'

function Blogs() {
	const [token] = useToken()

	const [page, setPage] = React.useState(1)

	const [elements, setElements] = React.useState(0)

	const elList = React.useRef(null)

	const fetchProjects = (page = 1) =>
		client('blogs?page=' + page + '&limit=10', { token })

	const {
		data: blogs,
		isSuccess,
		refetch,
	} = useQuery(['blogs', page], () => fetchProjects(page), {
		keepPreviousData: true,
	})

	React.useEffect(() => {
		setElements(elList?.current?.childElementCount)
	}, [blogs])

	function handleDeleteBlog(evt) {
		const formData = new FormData()
		formData.append('blog_id', evt.target.dataset.deletebtn)

		fetch(process.env.REACT_APP_API_URL + '/blogs', {
			method: 'DELETE',
			headers: {
				token,
			},
			body: formData,
		}).then(() => refetch())
	}

	return (
		<div className='m-4'>
			<table className='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Sarlavha</th>
						<th>Muallif</th>
						<th>Blogni O'chirish</th>
					</tr>
				</thead>
				<tbody ref={elList}>
					{isSuccess &&
						blogs?.map((item, index) => (
							<tr key={item.blog_created + Math.random()}>
								<td>{index + 1}</td>
								<td>{item.blog_title}</td>
								<td>{item.blog_author}</td>
								<td>
									<button
										className='btn btn-danger'
										data-deletebtn={item.blog_id}
										onDoubleClick={handleDeleteBlog}>
										o'chirish
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<TableControllers
				className='me-auto'
				setPage={setPage}
				page={page}
				numberLi={elements}
			/>
		</div>
	)
}

export default Blogs
