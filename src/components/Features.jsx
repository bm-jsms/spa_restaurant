import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Features = () => {
	const sliders = [
		{
			url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
		},
		{
			url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
		},
		{
			url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlader = () => {
		const isfirstSlide = currentIndex === 0;
		const newIndex = isfirstSlide ? sliders.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlader = () => {
		const isLastSlide = currentIndex === sliders.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
			<div
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
				style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
			></div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-red-800 dark:bg-blue-900 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlader} />
			</div>

			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-red-800 dark:bg-blue-900 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlader} />
			</div>
		</div>
	);
};

export { Features };
