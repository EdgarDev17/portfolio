//TODO: Tengo que crear el contenedor de cada uno de los items y este componente renombrarlo a ITEMLIST

import { languages } from '../utils/programming'
import Image from 'next/image'
export default function List() {
	const renderItems = (): React.ReactNode => {
		return languages.map((item) => {
			return (
					<li key={String(item.name)}>
						<div className='flex items-center'>
							<Image
								src={String(item.url)}
								alt={'tech icon'}
								width={30}
								height={30}
							/>
							<p className='mx-3 my-2'>{item.name}</p>
						</div>
					</li>
			)
		})
	}

	return <ul className='grid list-none grid-cols-2'>{renderItems()}</ul>
}
