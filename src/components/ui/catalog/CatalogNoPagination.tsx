import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Heading from '../Heading'
import ProductItem from './Product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<div className='grid grid-cols-4 gap-10 '>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div className=''>нету продуктов</div>
			)}
		</section>
	)
}

export default Catalog
