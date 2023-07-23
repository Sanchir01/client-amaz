import { instance } from '@/api/api.interceptor'
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'
import Cookies from 'js-cookie'
import { saveToStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refresh-token')
		const response = await instance.post<string, { data: IAuthResponse }>(
			'/auth/login/access-token',
			{ refreshToken }
		)
		if (response.data.accessToken) saveToStorage(response.data)
		return response
	}
}
