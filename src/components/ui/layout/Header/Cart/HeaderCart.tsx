'use client'
import SquareButton from '@/components/ui/button/SquareButton'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

const HeaderCart: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
			/>
			{isShow && (
				<div className={styles.cartWrapper}>
					<div className='font-normal text-lg mb-5'>My cart</div>
					<div className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className='font-light'>Cart is empty!</div>
						)}
					</div>
					<div className={styles.footer}>
						<div className=''>Total:</div>
						<div className=''>{total}</div>
					</div>
					<div className='text-center mt-7 mb-5'>
						<Link className='btn btn-white' href='/checkout'>Go to checkout</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default HeaderCart
