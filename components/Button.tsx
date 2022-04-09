import React, { ReactElement, useState } from 'react'

type Props = { label: String; variant: 'primary' | 'secundary' }

export default function Button({ label, variant }: Props): ReactElement {
	const [buttonVariant, setButtonVariant] = useState('')

	return (
		<a
			href='/url'
			className={
				'bg-teal-00 w-full rounded px-28 py-3 text-center font-poppins text-sm text-white lg:w-auto'
			}
		>
			{label}
		</a>
	)
}
