import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
	return (
		<nav className='nav d-flex flex-column w-25  '>
			<ul className='nav__list list-group list-group-flush overflow-auto  border border-top-0 flex-grow-1'>
				<li className='nav__item list-group-item  p-0        '>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/'
						activeClassName='nav__link--active'
						exact>
						Slider
					</NavLink>
				</li>
				<li className='nav__item list-group-item  p-0'>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/blog'
						activeClassName='nav__link--active'>
						Blog
					</NavLink>
				</li>
				<li className='nav__item list-group-item  p-0'>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/number'
						activeClassName='nav__link--active'
						exact>
						Telefon raqamlar
					</NavLink>
				</li>
				<li className='nav__item list-group-item  p-0'>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/info'
						activeClassName='nav__link--active'
						exact>
						Kompaniya Info
					</NavLink>
				</li>
				<li className='nav__item list-group-item  border-top-0 p-0'>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/faq'
						activeClassName='nav__link--active'
						exact>
						FAQ
					</NavLink>
				</li>
				<li className='nav__item list-group-item  border-top-0 p-0'>
					<NavLink
						className='nav__link d-block p-3 text-decoration-none'
						to='/admin'
						activeClassName='nav__link--active'
						exact>
						Adminlar
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
