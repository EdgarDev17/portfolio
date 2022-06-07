import Title from '../components/Title'
import P from '../components/P'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SolidButton from '../components/buttons/SolidButton'
import { useRef, useState } from 'react'
import ProjectCard from "../components/ProjectCard";

export default function Home() {
	const main = useRef<HTMLDivElement>(null)
	const about = useRef<HTMLDivElement>(null)
	const projects = useRef<HTMLDivElement>(null)
	const contact = useRef<HTMLDivElement>(null)

	const getRef = () => {}

	// 👇🏼 esta funcion va a recibir el parametro desde el componente NavBar(child)

	const scrollToElement = (elementRef) => {
		window.scrollTo({
			top: elementRef.current,
			behavior: 'smooth',
		})
	}

	return (
		// contenedor principal
		<div id='main' ref={main} className='h-screen'>
			{/* Primera parte se muestra mi presentacion y una imagen */}

			<section
				ref={main}
				className='flex h-5/6 w-full items-center justify-center'
			>
				<div>
					<Title color='blue'>Edgardo Rodríguez</Title>

					<h2 className='mt-5 text-7xl font-semibold text-slate-700'>
						I build awesome web apps
					</h2>

					{/* <h2 className='mt-12 text-lg font-semibold text-slate-700'>
						About me
					</h2> */}

					<div className='mb-20 w-3/5'>
						<P lgmt={3} mt={12}>
							Hey there!{' '}
							<span className='font-semibold text-blue-500'>
								I am a software engineer
							</span>{' '}
							specializing on building better digital experiences.
							Now Im focusing on building accesible, responsive,
							scalable and awesome web apps. Come and lets build
							awesome software and resolve problems!
						</P>
					</div>

					<SolidButton label={'About me'} />
				</div>
				<motion.div
					animate={{ y: [0, 50, 0] }}
					transition={{ repeat: Infinity, duration: 7 }}
				>
					<Image
						src='/group72.svg'
						width={800}
						height={800}
						alt='image'
					/>
				</motion.div>
			</section>

			<div
				id='about'
				ref={about}
				className={
					'my-5 flex flex-col items-center justify-center lg:flex-row h-5/6'
				}
			>
				<div className='w-full text-justify'>
					<h2 className={'text-3xl font-semibold text-blue-500'}>
						About me
					</h2>
					<div className='lg:w-1/2'>
						<P mt={5}>
							Hello! if you’re here it’s because you like my work
							and that’s awesome! if you’re looking for a web
							engineer who likes to work in a team, collaborate,
							listen to ideas from other people in a team and who
							doesnt stop learning every day. you’re in the{' '}
							<span className='text-blue-500'>right site</span>.
						</P>

						<P mt={3}>
							I’ve been creating web software about 3 years, Ive
							been learning best practices, unit testing,
							debbuging, CI/CD, git and more! Some technologies I
							enjoy work with include{' '}
							<span className='text-blue-500'>
								React JS, Next Js, TypeScript, TailwindCSS and
								Mongo DB.
							</span>
						</P>
					</div>
				</div>

				<Image
					src='/Group 84.svg'
					alt='image'
					width={800}
					height={800}
				/>
			</div>

			<div className={'h-5/6'}>
			<h2 className={'text-3xl font-semibold text-blue-500'}>
				Projects I have built
			</h2>

			<div className={'mt-16'}>
				<ProjectCard/>
				<ProjectCard/>
				<ProjectCard/>
			</div>
			</div>
		</div>
	)
}
