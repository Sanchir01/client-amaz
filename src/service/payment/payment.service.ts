import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/types/payment.interfcae'

export const PaymentService = {
	async getAll(amount: number) {
		return instance.post<IPaymentResponse>('/payment', { amount })
	}
}
