import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Button from '../../components/Button/Button'

export default function Home() {
	return (
		<>
			<main className='content'>
				<section className='intro container'>
					<div className='intro__inner'>
						<h1 className='intro__title'>Получите профессию frontend-разработчика и постройте карьеру в IT</h1>
						<p className='intro__text'>Устроитесь на работу или вернем деньги, после прохождения полной программы.</p>
						<Button className='intro__button button'>Выбрать обучение</Button>
					</div>
				</section>

				<section className='swiper '>
					<div className='swiper__inner container'>
						<Swiper
							modules={[Autoplay]}
							spaceBetween={16}
							breakpoints={{
								768: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							slidesPerView={1}
							loop={true}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
						>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\star.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>Пользователи оценивают программы обучения на 9,6</p>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\group.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>5 лет занимаемся обучением фронтенд-разработке</p>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\rocket.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>Сопровождение от наставников уровня middle+</p>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\star.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>Пользователи оценивают программы обучения на 9,6</p>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\group.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>5 лет занимаемся обучением фронтенд-разработке</p>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className='swiper-slide__icon'
									src='src\images\rocket.svg'
									alt=''
									width='20px'
									height='20px'
								/>
								<p className='swiper-slide__text'>Сопровождение от наставников уровня middle+</p>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className='specialization'>
					<div className='specialization--inner container'></div>
				</section>
			</main>
		</>
	)
}
