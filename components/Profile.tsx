import React from 'react'
import Image from 'next/image'
import { GoGitBranch } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

export default function Profile (){
	return (
		<div className='flex w-full flex-row items-center justify-evenly lg:justify-start'>
			<div className='mr-5 rounded-full lg:mr-20'>
				<Image
					src={
						'https://i.pinimg.com/564x/2e/3c/42/2e3c42efc0c284cb38b11c975ba61e0c.jpg'
					}
					width={50}
					height={50}
					alt='profile picture'
					className='rounded-full '
				/>
			</div>

			<div className='flex items-center justify-start'>
				{<GoGitBranch />}
				<a href='#' className='mr-5 ml-1'>
					Github{' '}
				</a>
			</div>

			<div className='flex items-center justify-start'>
				{<FaLinkedin />}
				<a href='#' className='mr-5 ml-1'>
					Linked In
				</a>
			</div>
		</div>
	)
}