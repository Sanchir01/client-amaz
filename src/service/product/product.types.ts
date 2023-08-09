import { IProduct } from '@/types/product.interface'

export type TypeProductData = {
	name: string
	price: number
	description: string
	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings: string
	minPrice?:string
	maxPrice?: string
	categoryId?:string
}

export type TypeParamFilters = {
	searchParams:TypeProductDataFilters
}

export enum EnumProductSort {
	HIGH_PRICE = 'hight-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

