import React from 'react'
import { NavLink } from 'react-router-dom'
import SiteLogo from '../../assets/images/site-logo.svg'
import useToken from '../../hooks/useToken'

function Header() {
	const [setToken] = useToken(true)
	return (
		<div className='site__header border border-top-0 border-left-0 d-flex align-items-center p-3'>
			<NavLink className='site__logo' to='/'>
				<img src={SiteLogo} alt='Digital Stars Logo' />
			</NavLink>
			<button
				className='logout__btn  btn  btn-primary ms-auto text-right'
				onDoubleClick={() => setToken(false)}>
				Log Out
			</button>
		</div>
	)
}

export default Header
