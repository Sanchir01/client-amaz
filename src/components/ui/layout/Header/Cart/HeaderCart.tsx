'use client'
import SquareButton from '@/components/ui/button/SquareButton'
import { Button } from '@/components/ui/button/button'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import cn from 'clsx'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
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
			<div
				className={cn(
					`absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white`,
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal text-lg mb-5'>My cart</div>
				<div className=''>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty!</div>
					)}
				</div>
				<div className='flex gap-3'>
					<div className=''>Total:</div>
					<div className=''>{total}</div>
				</div>
				<div className="text-center">
					<Button variant='light'  className='btn-link mt-5 mb-2'>Place order</Button>
				</div>
			</div>
		</div>
	)
}

export default HeaderCart
