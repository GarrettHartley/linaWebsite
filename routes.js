import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Main from './components/Main'
import Contact from './components/Contact'
import About from './components/About'
import Writings from './components/Writings'
import SomethingElse from './components/SomethingElse'
import MultiPageApp from './components/MultiPageApp'
export default (
<Route path='/' component={Main}>
	<Route path="/singlePageApp" component={App}></Route>
	<Route path="/multiPage" component={MultiPageApp}>
		<IndexRoute component={MultiPageApp} />
		<Route path='/multiPage/about' component={About}></Route>
		<Route path='/multiPage/writings' component={Writings}></Route>
		<Route path='/multiPage/something-else' component={SomethingElse}></Route>
		<Route path='/multiPage/contact' component={Contact}></Route>
	</Route>


</Route>
)