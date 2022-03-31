import React from 'react'

const Title: React.FC = ({ children }) => {
	return (
		<div>
			<h1 className='font-poppins text-4xl font-bold text-slate-900 lg:text-5xl'>
				{children}
			</h1>
		</div>
	)
}

export default Title
