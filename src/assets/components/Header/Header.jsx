import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { links } from '../../data'

import logo from '../../../images/logo.svg'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)
	return (
		<>
			<header className='header'>
				<div className='header__inner container'>
					<NavLink
						className='header__logo logo'
						to='/'
						onClick={() => setHeaderModal(false)}
					>
						<img
							src={logo}
							loading='lazy'
							className='logo__image'
							width='24px'
							height='24px'
						/>
						<p>WebDevSchool</p>
					</NavLink>
					<nav className='header__menu hidden-mobile'>
						<ul className='header__menu-list'>
							<Header_li className='header__menu' />
						</ul>
					</nav>
					<Button className='header__button button button--transparent hidden-mobile'>Начать</Button>
					<Button
						className='header__burger-button button__burger-menu burger-button visible-mobile'
						onClick={() => setHeaderModal(true)}
					>
						<span className='visually-hidden'>Open navigation menu</span>
					</Button>
				</div>

				<Modal
					className='mobile-overlay visible-mobile'
					open={headerModal}
				>
					<div className='mobile-overlay__close-button-wrapper'>
						<Button
							className='mobile-overlay__close-button cross-button'
							onClick={() => setHeaderModal(false)}
						>
							<span className='visually-hidden'>Close navigation menu</span>
						</Button>
					</div>
					<div className='mobile-overlay__body'>
						<ul className='mobile-overlay__body-list'>
							<li className='mobile-overlay__body-item'>
								<NavLink
									className='mobile-overlay__body-logo logo'
									to='/'
									onClick={() => setHeaderModal(false)}
								>
									<img
										src={logo}
										loading='lazy'
										className='logo__image'
										width='24px'
										height='24px'
									/>
									<p>WebDevSchool</p>
								</NavLink>
							</li>

							<Header_li
								className={'mobile-overlay__body'}
								onClick={() => setHeaderModal(false)}
							/>

							<li className='mobile-overlay__body-item'>
								<Button className='mobile-overlay__body-button button button--transparent visible-mobile'>Начать</Button>
							</li>
						</ul>
					</div>
				</Modal>
			</header>
		</>
	)
}

function Header_li({ className, onClick }) {
	let listItems = links.map(data => (
		<li
			key={data.name}
			className={className + '-item'}
		>
			<NavLink
				to={data.link}
				className={className + '-link'}
				onClick={onClick}
			>
				{data.name}
			</NavLink>
		</li>
	))

	return listItems
}
