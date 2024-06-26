import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'

import Home from './assets/pages/Home/Home'
// import Products from './assets/pages/Products/Products'
const Products = lazy(() => import('./assets/pages/Products/Products'))

export default function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
					<Route
						exact
						path='/products'
						element={
							<Suspense fallback={<p>Loading</p>}>
								<Products />
							</Suspense>
						}
					/>
					<Route
						exact
						path='/diagnostics'
						element={<Products />}
					/>
					<Route
						exact
						path='/personal-stories'
						element={<Products />}
					/>
					<Route
						exact
						path='/about'
						element={<Products />}
					/>

					<Route
						exact
						path='*'
						element={<Error />}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	)
}
