import { IProduct } from '@/types/product.interface'

export type TypeProductData = {
	name: string
	price: number
	description: string
	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumProductSort {
	HIGH_PRICE = 'hight-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

