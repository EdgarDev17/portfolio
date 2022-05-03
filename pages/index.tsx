import ItemList from '../components/ItemList'
import { projects } from '../utils/projects'
import Button from '../components/Button'
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
		<div className='container mx-auto h-screen min-h-screen '>
			<NavBar />
			{/* Columna izquieda con mi informacion y proyectos*/}
			<div className='grid max-h-screen grid-cols-1 lg:mt-20 lg:grid-cols-2'>
				{/* esta es la columna izquierda, donde se muestra mi perfil, mis datos y mis skills */}
				<div className='mx-auto mt-16 w-11/12  lg:flex lg:flex-col lg:justify-between'>
					<div className='overflow-y-auto'>
						<Title>Edgardo Rodríguez</Title>

						<h2 className='mt-7 text-xl font-semibold text-slate-800'>
							Software Engineer
						</h2>
						<div className='mt-10'>
							<P>
								Hey there! Im a software engineer specializing
								on building better digital experiences. Now Im
								focusing on building accesible, responsive,
								scalable and awesome web apps. I like challenge
								myself by getting into new projects and learn
								how to improve my skills and learning best
								practices.
							</P>
						</div>

						<div className='mt-16 flex justify-center lg:justify-start'>
							<Button
								label={'Contact Me'}
								variant={'secundary'}
							/>
						</div>
					</div>

					{/* Mi informacion */}
					<div className='mx-auto mt-10 w-11/12'>
						<h2 className='my-5 font-poppins text-2xl font-semibold text-slate-800 lg:text-2xl'>
							About me
						</h2>
						<P mt={'5'}>
							Hello! My name is Edgardo Rodriguez and I am a
							software engineer, I like to challenge myself to
							improve my programming skills everyday and its like
							a hobby learn new technologies!
						</P>

						<P mt={'5'}>
							My interest for web development started when me and
							my team have to make a web music player app at
							college. Currently Im focusing on web development, I
							have learned important things like user experience,
							UI design, Acimport NavBar from accesibility and
							programming skills
						</P>

						<P mt={'5'}>
							Here some technologies Ive been working with
							recently:
						</P>

						<div className='mx-auto mt-5 mb-3'>
							<List />
						</div>
						<ContactCard />
						<Footer />
					</div>
				</div>

				<div>
					{/* Columna derecha se muestran los projectos */}

					<div className='lg:fixed'>
						<div className='mx-auto mt-20 w-11/12 lg:mt-0'>
							<h2 className='my-10 text-2xl font-semibold text-slate-800 lg:hidden'>
								My work
							</h2>

							<div className='mb-3 grid auto-rows-auto grid-cols-1 gap-y-3'>
								{handleProjectsApi()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
