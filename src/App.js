import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Quiz from './Quiz';
import Navbar from './Navbar';
import './App.css';

export default function App() {

	return (
		<div className='App'>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' exact component={Home}/>
					<Route path='/quiz' component={Quiz}/>
				</Routes>
			</Router>
			<Quiz/>
		</div>
	);
}