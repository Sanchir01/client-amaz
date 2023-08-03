'use client'
import { useActions } from '@/hooks/useActions'
import { CategoryService } from '@/service/category/category.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const asPath = usePathname()

	const { logout } = useActions()
	return (
		<aside
			className=' bg-secondary flex flex-col '
			style={{ height: ' calc(100vh - 91px)' }}
		>
			<div className=''>
				{isLoading ? (
					<span>Loading</span>
				) : data ? (
					<>
						<div className='mt-4 text-white mb-6 text-xl'>Categories : </div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
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
