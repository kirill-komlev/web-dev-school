import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useScrollbarSize from 'react-scrollbar-size'

import { links } from '../../data'

import logo from '../../../images/logo.svg'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

export default function Header() {
	const [headerModal, setHeaderModal] = useState(false)
	const { height, width } = useScrollbarSize()

	function openModal() {
		let pagePosition = window.scrollY
		let modal = document.getElementById('modal')

		document.body.classList.add('modal-open')
		document.body.style.marginRight = width + 'px'

		modal.style.top = pagePosition + 'px'
	}

	function closeModal() {
		document.body.classList.remove('modal-open')
		document.body.style.marginRight = 0

		modal.style.top = 0
	}

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
						onClick={() => {
							setHeaderModal(true)
							openModal()
						}}
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
							onClick={() => {
								setHeaderModal(false)
								closeModal()
							}}
						>
							<span className='visually-hidden'>Close navigation menu</span>
						</Button>
					</div>
					<div className='mobile-overlay__body'>
						{/* <NavLink
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
						</NavLink> */}
						<ul className='mobile-overlay__body-list'>
							<Header_li
								className={'mobile-overlay__body'}
								onClick={() => setHeaderModal(false)}
							/>
						</ul>
						<Button className='mobile-overlay__body-button button button--transparent visible-mobile'>Начать</Button>
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
