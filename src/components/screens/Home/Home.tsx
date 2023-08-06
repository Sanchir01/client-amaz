'use client'
import Carousel from '@/components/ui/carousel/Carousel'
import Catalog from '@/components/ui/catalog/Catalog'
import { carouselItems } from '@/constants/carousel.data'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products, length }) => {
	return (
		<>
			<Carousel items={carouselItems} className='mb-10' />
			<Catalog products={products} title='Freshed Products' />
		</>
	)
}

export default Home
