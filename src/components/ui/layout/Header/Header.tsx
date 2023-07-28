import amazon from '@/assets/images/amazon.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { PiHeartLight } from 'react-icons/pi'
import HeaderCart from './Cart/HeaderCart'
import HeaderProfile from './HeaderProfile'
const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full px-6 py-2 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href={'/'}>
				<Image priority src={amazon} width={180} height={37} alt='amazon' />
			</Link>
			<div className=''></div>
			<div className='flex items-center justify-end gap-10'>
				<Link href={'/favorites'}>
					<PiHeartLight size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
