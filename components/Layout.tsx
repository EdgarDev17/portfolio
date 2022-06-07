import NavBar from './NavBar'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className={'w-11/12 mx-auto'}>
			<NavBar />
			<main>{children}</main>
		</div>
	)
}
export default Layout