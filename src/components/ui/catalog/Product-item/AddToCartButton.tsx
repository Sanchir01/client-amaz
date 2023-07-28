import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { removeFromCart, addToCart } = useActions()
	const { items } = useCart()
	const CurrentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)
	return (
		<div>
			<button
			className=' text-secondary'
				onClick={() =>
					CurrentElement
						? removeFromCart({ id: CurrentElement.id })
						: addToCart({ product, quantity: 1, price: product.price })
				}
			>
				{CurrentElement ? <BsFillCartCheckFill /> : <AiOutlineShoppingCart />}
			</button>
		</div>
	)
}

export default AddToCartButton
