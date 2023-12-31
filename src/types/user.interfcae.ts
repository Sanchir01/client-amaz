import { IOrders } from './oreder.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrders
}
