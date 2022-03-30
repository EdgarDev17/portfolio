import ItemList from '../components/ItemList'
import Profile from '../components/Profile'
import { projects } from '../utils/projects'
const Home = () => {

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
						<h1 className='font-poppins text-4xl font-bold text-slate-900 lg:text-5xl'>
							Edgardo Rodríguez
						</h1>

						<h2 className='mt-5 font-poppins text-xl font-semibold text-slate-800'>
							Software Engineer
						</h2>

						<p className='mt-7 text-justify font-poppins leading-7 text-slate-900 lg:mt-10'>
							Hey there! 👋🏼 Im a software developer focusing on
							web development, some technologies I enjoy work with
							include ReactJS using the framework NextJS and
							TailwindCSS for frontend dev and I usually use Node
							Js and MongoDB for backend Development.
						</p>
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
		</div>
	)
}

export default Home
