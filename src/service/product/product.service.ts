import { instance } from '@/api/api.interceptor'
import { IProduct } from '@/types/product.interface'
import { TypeProductData, TypeProductDataFilters } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return instance<IProduct[]>({
			url: '/products',
			method: 'GET',
			params: queryData
		})
	},
	async getSimilar(productId: string | number) {
		return instance<IProduct[]>({
			url: `/products/similar/${productId}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return instance<IProduct>({
			url: `/products/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `/products/by-category/${categorySlug}`,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IProduct[]>({
			url: `/products/${id}`
		})
	},
	async create() {
		return instance<IProduct>({
			url: '/category',
			method: 'POST'
		})
	},
	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'POST',
			data
		})
	},
	async delete(id: string | number) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'DELETE'
		})
	}
}