import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Slider from './screens/Slider/Slider'
import Blog from './screens/Blog/Blog'
import Team from './components/Team/Team'
import Info from './screens/Info/Info'
import Faq from './screens/Faq/Faq'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Admin from './screens/Admin/Admin'

function AuthenticatedApp() {
	return (
		<>
			<div className='site__wrapper h-100'>
				<Header />
				<div className='site__content d-flex '>
					<NavBar />
					<div className='site__content-wrapper flex-grow-1  overflow-auto'>
						<Switch>
							<Route path='/' component={Slider} exact />
							<Route path='/blog' component={Blog} />
							<Route path='/team' component={Team} exact />
							<Route path='/info' component={Info} exact />
							<Route path='/faq' component={Faq} exact />
							<Route path='/admin' component={Admin} exact />
						</Switch>
					</div>
				</div>
			</div>
		</>
	)
}

export default AuthenticatedApp
