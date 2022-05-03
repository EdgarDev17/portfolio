import Image from 'next/image'

let containerVariants = {
	mobile: 'container mx-auto mt-5 flex items-center justify-evenly',
	desktop: 'lg:justify-center lg:items-center',
}

export default function NavBar() {
	return (
		<nav className={containerVariants.mobile + ' ' + containerVariants.desktop}>
			<div>
				<Image
					src={'/pfp1.png'}
					width={50}
					height={50}
					alt='profile  picture'
					className='rounded-full'
				/>
			</div>

			<div className='flex items-center justify-center'>
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
