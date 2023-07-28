import { ICartItem } from '@/types/cart.interfcae'
import Image from 'next/image'
import { FC } from 'react'
import CartActions from './CartActions/CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className='flex gap-10'>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div className=''>
				<div className=''>{item.product.name}</div>
				<div className=''>{item.price}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
