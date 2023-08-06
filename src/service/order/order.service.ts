import { instance } from '@/api/api.interceptor'
import { IOrders } from '@/types/oreder.interface'

export const OrderService = {
	async getAll() {
		return instance<IOrders>({
			url: '/orders',
			method: 'GET'
		})
	},

	async getByUserId(){
		return instance<IOrders[]>({
			url:'/orders/by-user'
		})
	}
}
