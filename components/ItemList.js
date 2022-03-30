const ItemList = ({ lenguageProgramming, title, description, githubLink }) => {
	return (
		<>
			<div className='cursor-pointer'>
				<div className=' rounded-md border py-8 px-5 shadow-md hover:shadow-md'>
					<p className='my-1 mx-5 text-sm font-bold text-slate-800'>
						{lenguageProgramming}
					</p>
					<h2 className='mx-5 mt-1 text-2xl font-semibold text-black'>
						{title}
					</h2>
					<p className='mx-5 mt-3 text-left text-slate-800'>
						{description}
					</p>
					<p className='mx-5 mt-3 mb-2 text-sm text-slate-800'>
						Check it out on 
						<a className="ml-1" href={githubLink}>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default ItemList
