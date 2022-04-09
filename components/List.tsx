import { languages } from '../utils/programming'
export default function List() {
	const renderItems = (): React.ReactNode => {
		return languages.map((item) => {
			return <li key={String(item.name)}>{`- ${item.name}`}</li>
		})
	}

	return <ul className='list-none grid grid-cols-2'>{renderItems()}</ul>
}
