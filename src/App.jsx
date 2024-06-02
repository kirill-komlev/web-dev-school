import { useState } from 'react'

import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import { Header, Dialog } from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'

import Home from './assets/pages/Home/Home'
import Products from './assets/pages/Products/Products'

export default function App() {
	const [name, setName] = useState('main')

	const handleClick = name => {
		setName(name)
	}
	return (
		<>
			<Header onChange={handleClick} />

			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						exact
						path='/products'
						element={<Products />}
					/>
				</Routes>
			</Router>

			<Footer />

			<Dialog />
		</>
	)
}
