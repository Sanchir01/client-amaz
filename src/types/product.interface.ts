import { ICategory } from './category.interfcae'
import { IReview } from './reviews.interfcae'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	createdAt: string
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}