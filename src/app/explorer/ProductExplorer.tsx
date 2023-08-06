'use client'
import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { useFilters } from '@/hooks/useFilters'
import { ProductService } from '@/service/product/product.service'
import { TypePaginationProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useState } from 'react'
import styles from './productExplorer.module.scss'
import Catalog from '@/components/ui/catalog/Catalog'

interface IProductExplorer {
	initialProducts: TypePaginationProduct
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilteredOpen, setIsFilteredOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateQueryParam } = useFilters()

	const {data, isFetching} = useQuery(
		['products explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated
		}
	)

	return (
		<>
			<div className=''>
				<Heading>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
			</div>
			<Button
				variant='light'
				className='mb-7'
				onClick={() => setIsFilteredOpen(!isFilteredOpen)}
			>
				{isFilteredOpen ? 'Close' : 'Open'}
			</Button>
			<div
				className={cn(styles.explorer, {
					[styles.filterOpened]: isFilteredOpen
				})}
			>
				<aside></aside>
				<section>
               <Catalog products={data.products} isLoading={isFetching}/>
            </section>
			</div>
		</>
	)
}

export default ProductExplorer
