import { axiosClassic, instance } from '@/api/api.interceptor'
import { IReview } from '@/types/reviews.interfcae'

type TypeData = {
	rating: number
	text: string
}

export const ReviewsService = {
	async getAll() {
		return instance<IReview[]>({ url: '/rewiev', method: 'GET' })
	},
	async leave(productId: string, data: TypeData) {
		return instance<IReview>({
			url: `/rewiev/leave/${productId}`,
			method: 'POST',
			data
		})
	},
	async getAverage(productId: number | string) {
		return axiosClassic<number>({
			url: `/rewiev/average-by-product/${productId}`,
			method: 'GET'
		})
	}
}
