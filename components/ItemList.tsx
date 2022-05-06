type Props = {
	title: String
	programmingLanguage: String
	description: String
	githubLink: string
}

export default function ItemList({
	programmingLanguage,
	title,
	description,
	githubLink,
}: Props) {
	return (
		<>
			<div className='cursor-pointer hover:scale-110'>
				<div className='rounded-md border border-slate-300 bg-white py-8 px-1 shadow-md hover:shadow-lg'>
					<p className='my-1 mx-5 text-sm font-bold text-slate-700'>
						{programmingLanguage}
					</p>
					<h2 className='mx-5 mt-3 text-2xl font-bold text-slate-900'>
						{title}
					</h2>
					<p className='mx-5 mt-3 text-slate-600'>
						{description}
					</p>
					<p className='mx-5 mt-3 mb-2 text-sm text-slate-600'>
						Check it out on
						<a className='ml-1 text-blue-700' href={githubLink}>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</>
	)
}
