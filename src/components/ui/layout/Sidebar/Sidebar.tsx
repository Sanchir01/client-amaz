'use client'
import { useCategories } from '@/hooks/categories/useCategories'
import { useActions } from '@/hooks/useActions'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import cn from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { ADMIN_MENU } from './admin-menu'
import { convertToMenuItems } from './convertToMenuItems'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()

	const { pathname, isAdminPanel } = useIsAdminPanel()
	const asPath = usePathname()

	const { logout } = useActions()
	return (
		<aside
			className=' bg-secondary flex flex-col  justify-between z-10'
			style={{ height: ' calc(100vh - 91px)', minHeight: 'calc(100vh - 91px)' }}
		>
			<div className=''>
				{isLoading ? (
					<span>Loading</span>
				) : data ? (
					<>
						<div className='mt-4 text-white mb-6 text-xl'>
							{isAdminPanel ? ' Menu  :' : 'Categories'}
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(item => (
								<li key={item.href}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === item.href
												? 'text-primary'
												: 'text-white'
										)}
										href={item.href}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div className=''>category not found</div>
				)}
			</div>
			<button
				className='text-white flex items-center ml-10 mb-10'
				onClick={() => logout()}
			>
				<FiLogOut />
				<span className='ml-2'> Logout</span>
			</button>
		</aside>
	)
}

export default Sidebar
