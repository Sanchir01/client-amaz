import { instance } from '@/api/api.interceptor'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getMain() {
		return instance({
			url: '/statistics/main',
			method: 'GET'
		})
	}
}
