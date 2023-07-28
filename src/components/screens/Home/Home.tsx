import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { Meta } from '@/components/ui/meta'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products,length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<Meta title='Home'>
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<Catalog data={{products ,length}} title='Freshed Products'  />
			</Layout>
		</Meta>
	)
}

export default Home
