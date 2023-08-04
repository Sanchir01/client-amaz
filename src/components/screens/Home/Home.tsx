'use client'
import Catalog from '@/components/ui/catalog/Catalog'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<>
			{!!user && <button onClick={() => logout()}>Logout</button>}
			<Catalog products={products} title='Freshed Products' />
		</>
	)
}

export default Home
