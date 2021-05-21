import './App.scss'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Slider from './screens/Slider/Slider'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'

function AuthenticatedApp() {
	return (
		<>
			<div className='site__wrapper d-flex '>
				<NavBar />
				<div className='site__content flex-grow-1'>
					<Header />
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/slider' component={Slider} exact />
						<Route path='/' component={Home} exact />
						<Route path='/' component={Home} exact />
						<Route path='/' component={Home} exact />
					</Switch>
				</div>
			</div>
		</>
	)
}

export default AuthenticatedApp
