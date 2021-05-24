import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import useToken from '../../hooks/useToken'
import moment from 'moment'
import TableControllers from '../../components/TableControllers/TableControllers'

function Number() {
	const [token] = useToken()

	const [page, setPage] = React.useState(1)

	const [elements, setElements] = React.useState(0)

	const elList = React.useRef(null)

	const fetchProjects = (page = 1) =>
		client('numbers?page=' + page + '&limit=10', { token })

	const { data: numbers, isSuccess } = useQuery(
		['numbers', page],
		() => fetchProjects(page),
		{ keepPreviousData: true },
	)

	React.useEffect(() => {
		setElements(elList?.current?.childElementCount)
	}, [numbers])

	return (
		<div className='d-flex flex-column align-items-start'>
			<table className='numbers-table table table-striped w-50 m-4'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Sana</th>
						<th scope='col'>Telefon Raqam</th>
					</tr>
				</thead>
				<tbody ref={elList}>
					{isSuccess &&
						numbers?.map((number, index) => (
							<tr key={number.number_date}>
								<th scope='row'>{index + 1}</th>
								<td>
									{moment(number.number_date).format('LLL')}
								</td>
								<td className=' text-decoration-underline cursor-pointer'>
									<a href='tel:+990902023'>
										{number.number_val}
									</a>
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

export default Number
