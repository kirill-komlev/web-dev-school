import { intro } from '../../data'

export default function Intro({ name }) {
	return (
		<>
			<div className='container'>
				<h1>{intro[name].title}</h1>
				<h3>{intro[name].text}</h3>
				<button>{intro[name].button_text}</button>
			</div>
		</>
	)
}
