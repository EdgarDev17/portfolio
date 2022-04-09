import React from 'react'

type Props = {
	mt?: String;
	children?: React.ReactNode;
}

const P: React.FC<Props> = ({ children, mt }) => {
	return (
		<p className= {`mt-${mt} text-justify font-poppins leading-7 tracking-wider text-slate-900 lg:mt-10`}>
			{children}
		</p>
	)
}

export default P
