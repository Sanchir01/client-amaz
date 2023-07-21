import { instance } from '@/api/api.interceptor'
import { IReview } from '@/types/reviews.interfcae'

type TypeData = {
	rating: number
	text: string
}

export const ReviewsService = {
	async getAll() {
		return instance<IReview[]>({ url: '/review', method: 'GET' })
	},
	async leave(productId: string, data: TypeData) {
		return instance<IReview>({
			url: `/review/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
