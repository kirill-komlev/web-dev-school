import { NavLink } from 'react-router-dom'

import logo from '../../../images/logo.svg'

import { links } from '../../data'

export default function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='footer__inner container'>
					<div className='footer__block footer__about'>
						<NavLink
							className='footer__logo logo'
							to='/'
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
						<p className='footer__text'>
							Делаем жизнь людей лучше, при помощи обучения веб-разработке, и трансформируем систему образования для создания востребованных IT-специалистов.
						</p>
						<p className='footer__address'>
							г. Санкт-Петербург / All World <br />
							10:00-20:00 MSK • GMT +3 <br />
							hello@webdev.school
						</p>
					</div>

					<div className='footer__block'>
						<h5>Ссылки</h5>
						<nav className='footer__menu'>
							<ul className='footer__menu-list'>
								<Footer_li className='footer__menu' />
							</ul>
						</nav>
					</div>

					<div className='footer__block'>
						<h5>Контакты</h5>
						<p className='footer__address'>
							г. Санкт-Петербург / All World <br />
							10:00-20:00 MSK • GMT +3 <br />
							hello@webdev.school
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

function Footer_li({ className, onClick }) {
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
