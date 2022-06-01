import React from 'react'

type Props = {
	mt?: number
	lgmt?: number
	children?: React.ReactNode
}

const P = ({ children, mt, lgmt }: Props) => {
	return (
		<p className= {`mt-${mt} leading-2 text-slate-800 lg:mt-${lgmt}`}>
			{children}
		</p>
	)
}

export default P
