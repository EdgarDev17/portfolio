import React from 'react'

type Props = {
	mt?: number
	lgmt?: number
	children?: React.ReactNode
}

const P: React.FC<Props> = ({ children, mt, lgmt }) => {
	return (
		<p className= {`mt-${mt} text-justify font-poppins leading-7 tracking-wider text-slate-900 lg:mt-${lgmt}`}>
			{children}
		</p>
	)
}

export default P
