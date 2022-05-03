import ItemList from '../components/ItemList'
import { projects } from '../utils/projects'
import Title from '../components/Title'
import P from '../components/P'
import List from '../components/List'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ContactCard from '../components/ContactCard'

export default function Home() {
	
	const handleProjectsApi = () => {
		return projects.map((project) => {
			return (
				<ItemList
					key={project.id}
					lenguageProgramming={project.programming}
					title={project.title}
					description={project.description}
					githubLink={project.githubUrl}
				/>
			)
		})
	}

	return (
		// contenedor principal
		<div className='container mx-auto h-screen'>
			<NavBar />

			{/* contenedor de las dos cols*/}
			<div className='grid max-h-screen grid-cols-1 lg:mt-16 lg:grid-cols-2'>
				{/* esta es la columna izquierda, donde se muestra mi perfil, mis datos y mis skills */}
				<div className='mx-auto mt-16 w-11/12 lg:mt-0'>
					<div>
						<Title>Edgardo Rodríguez</Title>
						<h2 className='mt-7 text-xl font-semibold text-slate-800'>
							Software Engineer
						</h2>
						<P lgmt={7} mt={10}>
							Hey there! I am a software engineer specializing on
							building better digital experiences. Now Im focusing
							on building accesible, responsive, scalable and
							awesome web apps.
						</P>

						<P mt={10} lgmt={0}>
							I like challenge myself by getting into new projects
							because I enjoy to work in a team and be productive
							and I try to improve my development skills every
							day.
						</P>
					</div>

					{/* Mi informacion */}
					<div className='mx-auto mt-10'>
						<h2 className='lg:mt20 text-2xl font-semibold text-slate-800 lg:text-2xl'>
							About me
						</h2>

						<P mt={5}>
							I really enjoy learning new thing about programming
							every day because I like to keep up to date with new
							techbologies and best practices Im currenly focusing
							on web development, I have been developming web
							projects around 3 years.
						</P>

						<P mt={5}>
							These are some technologies I have been working with
							recently:
						</P>

						<div className='mx-auto mt-5 mb-3'>
							<List/>
						</div>
						{/* <Footer /> */}
					</div>
				</div>

				<div>
					{/* Columna derecha se muestran los projectos */}
					<div className=''>
						<div className='mx-auto mt-20 w-11/12 lg:mt-0'>
							<h2 className='my-5 text-2xl font-semibold text-slate-800 lg:hidden'>
								Check out my work
							</h2>

							<div className='mb-5 grid grid-cols-1 gap-y-3'>
								{handleProjectsApi()}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <ContactCard /> */}
		</div>
	)
}
