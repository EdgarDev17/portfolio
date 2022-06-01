import React from 'react'

type Props = {
	children: React.ReactNode,
	color: string
}

const Title = ({ children, color} : Props ) => {
	return (
		<div>
			<h1 className={`font-semibold text-${color}-500 xl:text-7xl`}>
				{children}
			</h1>
		</div>
	)
}

export default Title
