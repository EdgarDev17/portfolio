import Image from 'next/image'

//lg:bg-white lg:fixed lg:mt-0
let containerVariants = {
	mobile: 'container mx-auto mt-5 flex items-center justify-evenly',
	desktop: 'lg:justify-between lg:items-center',
}

export default function NavBar() {
	return (
		<nav className={containerVariants.mobile + ' ' + containerVariants.desktop}>
			<div className='lg:ml-5'>
				<Image
					src={'/pfp1.png'}
					width={50}
					height={50}
					alt='profile  picture'
					className='rounded-full'
				/>
			</div>

			<div className='lg:mr-14'>
				<a href='#' className='mx-5'>
					About
				</a>
				<a href='#' className='mx-5'>
					Experience
				</a>
				<a href='#' className='mx-5'>
					Contact
				</a>
			</div>
		</nav>
	)
}
