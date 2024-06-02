import { useState } from 'react'

import logo from '../../../images/logo.svg'

let mobileOverlay = 'mobileOverlay'

export function Header({ onChange }) {
	const [content, setContent] = useState('123')

	function handleClick(event) {
		onChange(event)
	}

	return (
		<>
			<header className='header'>
				<div className='header__inner container'>
					<a
						className='header__logo logo'
						// onClick={() => handleClick('main')}
						href='/'
					>
						<img
							src={logo}
							loading='lazy'
							className='logo__image'
							width='24px'
							height='24px'
						/>
						<p>WebDevSchool</p>
					</a>
					<nav className='header__menu hidden-mobile'>
						<ul className='header__menu-list'>
							<Header_li href='/products'>Обучение</Header_li>
							<Header_li href='/diagnostics'>Диагностика</Header_li>
							<Header_li href='/'>Отзывы</Header_li>
							<Header_li href='/'>О компании</Header_li>
						</ul>
					</nav>
					<button
						className='header__button button button--transparent hidden-mobile'
						type='button'
					>
						Войти
					</button>
					<button
						className='header__burger-button button__burger-menu burger-button visible-mobile'
						onClick={mobileOverlay.showModal}
					>
						321
						<span className='visually-hidden'>Open navigation menu</span>
					</button>
				</div>
			</header>
		</>
	)
}

function Header_li({ children, onClick, href }) {
	return (
		<>
			<li className='header__menu-item'>
				<a
					href={href}
					className='header__menu-link'
					onClick={onClick}
				>
					{children}
				</a>
			</li>
		</>
	)
}

export function Dialog() {
	return (
		<>
			<dialog
				className='mobile-overlay visible-mobile'
				id={mobileOverlay}
			>
				menu
			</dialog>
		</>
	)
}
