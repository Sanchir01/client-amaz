import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='grid ' style={{ gridTemplateColumns: '1fr 4fr' }}>
				<Sidebar />
				<div className='p-12'>{children}</div>
			</main>
		</>
	)
}

export default Layout
