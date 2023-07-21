import { instance } from '@/api/api.interceptor'
import { IUser } from '@/types/user.interfcae'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		return instance<IUser>({
			url: '/users/profile',
			method: 'GET'
		})
	},
	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: '/users/profile',
			data,
			method: 'PUT'
		})
	},
	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `/users/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
