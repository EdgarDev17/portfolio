import ItemList from '../components/ItemList'

const Home = () => {
	return (
		<div className='container mx-auto min-h-screen'>
			<div className='mt-20 grid grid-cols-1'>
				<div className='mx-auto w-4/5'>
					<h1 className='font-poppins text-5xl font-bold text-slate-900'>
						Edgardo Rodríguez
					</h1>
					<h2 className='mt-7 font-poppins text-xl font-semibold text-slate-900'>
						Software Engineer
					</h2>
					<p className='mt-7 text-justify font-poppins leading-7 text-slate-900'>
						Hey there! 👋🏼 Im a software developer focusing on web
						development, some technologies I enjoy work with include
						ReactJS using the framework NextJS and TailwindCSS for
						frontend dev and I usually use Node Js and MongoDB for
						backend Development.
					</p>
					
				</div>

				<div className='mx-auto mt-7 w-11/12'>
					<div className='grid auto-rows-auto grid-cols-1 gap-y-3'>
						<ItemList
							lenguageProgramming={'Javascript'}
							title={'Quote Maker'}
							description={
								'This is project was built in Nextjs and TailwindCSS'
							}
							githubLink={'https://github.com/'}
						/>
						<ItemList
							lenguageProgramming={'TypeScript'}
							title={'E-commerce'}
							description={
								'This is project was built in Nextjs and TailwindCSS'
							}
							githubLink={'https://github.com/'}
						/>

						<ItemList
							lenguageProgramming={'TypeScript'}
							title={'Delivery Website'}
							description={
								'This is project was built in Nextjs and TailwindCSS'
							}
							githubLink={'https://github.com/'}
						/>

						<ItemList
							lenguageProgramming={'TypeScript, MongoDB'}
							title={'Recipes Rest Api'}
							description={
								'This is and rest api that provides http request for web apps'
							}
							githubLink={'https://github.com/'}
						/>
					</div>
				</div>

				<div className='mx-auto mt-7 w-11/12'>
					<div className='grid auto-rows-auto grid-cols-1 gap-y-3'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
