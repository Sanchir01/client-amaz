import { IUser } from './user.interfcae'

export interface IReview {
	id: number
	user: IUser
	createdAt: string
	text: string
	rating: number
}
