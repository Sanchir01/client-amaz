import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { ProductService } from '@/service/product/product.service'
import { TypeParamFilters, TypeProductDataFilters } from '@/service/product/product.types'
import ProductExplorer from './ProductExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProduct(searchParams: TypeProductDataFilters) {
	const data = await ProductService.getAll(searchParams)
	return data
}  

export default async function ExplorerPage({searchParams}:TypeParamFilters) {
   const data = await getProduct(searchParams)
	return <ProductExplorer initialProducts={data}/>
}
