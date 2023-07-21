import { ICartItem } from './cart.interfcae'
import { IUser } from './user.interfcae'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrders {
	id: number
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
}
