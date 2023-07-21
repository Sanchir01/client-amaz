import { instance } from '@/api/api.interceptor'
import { ICategory } from '@/types/category.interfcae'

export const CategoryService = {
	async getAll() {
		return instance.get<ICategory[]>('/category')
	},
	async getById(id: string | number) {
		return instance.get<ICategory>(`/category/${id}`)
	},
	async getBySlug(slug: string) {
		return instance.get<ICategory>(`/category/by-slug/${slug}`)
	},
	async create() {
		return instance.post<ICategory>('/category')
	},
	async update(id: string | number, name: string) {
		return instance.put<ICategory>(`/category/${id} `, { data: { name } })
	},
	async delete(id: string | number) {
		return instance.delete<ICategory>(`/category/${id}`)
	}
}
