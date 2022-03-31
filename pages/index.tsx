import ItemList from '../components/ItemList'
import Profile from '../components/Profile'
import { projects } from '../utils/projects'
import Button from '../components/Button'
import Title from '../components/Title'
import P from '../components/P'
const Home: React.FC = () => {
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
		<div className='container mx-auto min-h-screen'>
			{/* Contiene los titulos y la columna de tarjetas de projectos */}
			<div className='mt-5 grid grid-cols-1 lg:mt-20 lg:grid-cols-2'>
				{/* contenedor de la informacion de mi perfil */}
				<div className='mx-auto w-11/12 lg:flex lg:flex-col lg:justify-between'>
					<div>
						<Title>Edgardo Rodríguez</Title>

						<h2 className='mt-5 font-poppins text-xl font-semibold text-slate-800'>
							Software Engineer
						</h2>

						<P>
							Hey there! 👋🏼 Im a software developer focusing on
							web development, some technologies I enjoy work with
							include ReactJS using the framework NextJS and
							TailwindCSS for frontend dev and I usually use Node
							Js and MongoDB for backend Development.
						</P>

						<div className='mt-12 flex justify-center lg:justify-start'>
							<Button label={'Contact Me'} />
						</div>
					</div>

					<div className='mt-10 lg:mb-28'>
						<Profile />
					</div>
				</div>

				{/* Contenedor de la lista de tarjetas */}
				<div className='mx-auto mt-10 w-11/12 lg:mt-0'>
					<h2 className='mb-5 text-lg font-semibold text-slate-800 lg:hidden'>
						Projects
					</h2>

					<div className='mb-3 grid auto-rows-auto grid-cols-1 gap-y-3'>
						{handleProjectsApi()}
					</div>
				</div>
			</div>

			<div>
				<h2 className='font-poppins text-3xl font-bold text-slate-900 lg:text-3xl'>
					Tecnologies I work with
				</h2>
			</div>
		</div>
	)
}

export default Home
