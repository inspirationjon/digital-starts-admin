import React from 'react'
import './TableControllers.scss'

function TableController({ setPage, page, numberLi, className }) {
	function handlePrevClick(evt) {
		evt.preventDefault()

		if (page === 1) {
			setPage(1)
		} else {
			setPage((p) => p - 1)
		}
	}

	function handleNextClick(evt) {
		evt.preventDefault()

		setPage((p) => p + 1)
	}

	return (
		<div className={'table-controllers ' + className}>
			<button
				className='table-control'
				onClick={handlePrevClick}
				disabled={page === 1 ? true : false}>
				<svg
					width='30'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 20 20'
					fill='#fff'>
					<path
						fill='#fff'
						fillRule='evenodd'
						d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
			<button
				className='table-control'
				onClick={handleNextClick}
				disabled={numberLi < 5 ? true : false}>
				<svg
					width='30'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 20 20'
					fill='#fff'>
					<path
						fill='#fff'
						fillRule='evenodd'
						d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
		</div>
	)
}

export default TableController
