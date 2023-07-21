import { IUser } from '@/types/user.interfcae'

export interface IUserState {
	email: string
	// isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
	name?: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
