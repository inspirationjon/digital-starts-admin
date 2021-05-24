import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import WriteBlog from '../../components/WriteBlog/WriteBlog'
import Blogs from '../../components/Blogs/Blogs'

function Blog() {
	return (
		<>
			<div className='d-flex  w-25 mx-auto my-3'>
				<NavLink
					className='p-2 text-decoration-none btn btn-outline-primary'
					activeClassName='bg-primary text-white'
					exact
					to='/blog'>
					Bloglar
				</NavLink>
				<NavLink
					className='p-2 text-decoration-none btn  btn-outline-primary ms-3'
					activeClassName='bg-primary text-white'
					to='/blog/write'
					exact>
					Blog Yozish
				</NavLink>
			</div>

			<Switch>
				<Route path='/blog' component={Blogs} exact />
				<Route path='/blog/write' component={WriteBlog} exact />
			</Switch>
		</>
	)
}

export default Blog
