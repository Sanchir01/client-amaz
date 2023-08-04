'use client'
import amazon from '@/assets/images/amazon.png'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { PiHeartLight } from 'react-icons/pi'
import HeaderCart from './Cart/HeaderCart'
import HeaderProfile from './HeaderProfile'
import Search from './Search'

const Header: FC = () => {
	const { pathname, isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()
	return (
		<header
			className='bg-secondary w-full px-6 py-2 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href={'/'}>
				{isAdminPanel ? (
					<h2 className='text-3xl text-white font-semibold'>Admin Panel</h2>
				) : (
					<Image priority src={amazon} width={180} height={37} alt='amazon' />
				)}
			</Link>
			<div className=''></div>
			<div className='flex items-center justify-between gap-10'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'
						className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
					>
						<MdOutlineAdminPanelSettings size={20}/>
					</Link>
				)}
				<Search/>
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
