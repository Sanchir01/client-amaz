import Home from '@/components/screens/Home/Home'
import { ProductService } from '@/service/product/product.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	description: ''
}

export const revalidate = 60

async function getProducts() {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4,
		ratings: ''
	})

	return data
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home products={data?.products} length={data.length} />
}
