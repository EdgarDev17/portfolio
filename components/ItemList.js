const ItemList = ({ lenguageProgramming, title, description, githubLink }) => {
	return (
		<>
			<div className='cursor-pointer'>
				<div className=' rounded-md bg-black py-5 px-5 shadow-sm hover:shadow-md'>
					<p className='my-1 mx-5 text-sm font-medium text-white '>
						{lenguageProgramming}
					</p>
					<h2 className='mx-5 mt-1 text-2xl font-semibold text-white'>
						{title}
					</h2>
					<p className='mx-5 mt-3 text-left text-gray-300'>
						{description}
					</p>
					<p className='mx-5 mt-3 mb-2 text-sm text-gray-300'>
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
