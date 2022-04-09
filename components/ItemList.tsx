type Props = {
	title: String
	lenguageProgramming: String
	description: String
	githubLink: string
}

export default function ItemList({
	lenguageProgramming,
	title,
	description,
	githubLink,
}: Props) {
	return (
		<>
			<div className='cursor-pointer'>
				<div className=' rounded-md border bg-white border-slate-300 py-8 px-5 shadow-md hover:shadow-md'>
					<p className='my-1 mx-5 text-sm font-bold text-slate-800'>
						{lenguageProgramming}
					</p>
					<h2 className='mx-5 mt-1 text-2xl font-semibold text-slate-800'>
						{title}
					</h2>
					<p className='mx-5 mt-3 text-left text-slate-600'>
						{description}
					</p>
					<p className='mx-5 mt-3 mb-2 text-sm text-slate-600'>
						Check it out on
						<a className='ml-1' href={githubLink}>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</>
	)
}
