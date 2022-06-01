import React, { ReactElement, useState } from 'react'

type Props = { label: String}

export default function SolidButton({ label }: Props): ReactElement {

	return (
		<a
			href='/url'
			className={
				'bg-blue-500 rounded px-28 py-3 text-center  text-white'
			}
		>
			{label}
		</a>
	)
}
