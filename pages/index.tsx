import ItemList from '../components/ItemList'
import { projects } from '../utils/projects'
import Title from '../components/Title'
import P from '../components/P'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SolidButton from '../components/buttons/SolidButton'

export default function Home() {
	const handleProjectsApi = () => {
		return projects.map((project) => {
			return (
				<ItemList
					key={project.id}
					programmingLanguage={project.programming}
					title={project.title}
					description={project.description}
					githubLink={project.githubUrl}
				/>
			)
		})
	}

	return (
		// contenedor principal
		<div className='container w-full mx-auto h-screen overflow-x-hidden xl:w-11/12'>
			<NavBar />

			{/* Primera parte se muestra mi presentacion y una imagen */}
			<div className='flex h-4/5 w-full items-center justify-center'>
				<div>
					<Title color='blue'>Edgardo Rodríguez</Title>

					<h2 className='mt-5 text-7xl font-semibold text-slate-700'>
						I build awesome web apps
					</h2>

					<h2 className='mt-12 text-lg font-semibold text-slate-700'>
						About me
					</h2>

					<div className='w-3/5 mb-20'>
						<P lgmt={3} mt={3}>
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

					<SolidButton label={'About me'}/>

				</div>
				<motion.div
					animate={{ y: [0, 50, 0] }}
					transition={{ repeat: Infinity , duration: 7}}
				>
					<Image
						src='/group72.svg'
						width={800}
						height={800}
						alt='image'
					/>
				</motion.div>
			</div>
		</div>
	)
}
