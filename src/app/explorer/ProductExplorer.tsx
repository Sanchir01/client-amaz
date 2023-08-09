'use client'
import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import Catalog from '@/components/ui/catalog/Catalog'
import { useFilters } from '@/hooks/useFilters'
import { ProductService } from '@/service/product/product.service'
import { TypePaginationProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useState } from 'react'
import Filters from './filters/Filters'
import Pagination from './pagination/Pagination'
import styles from './productExplorer.module.scss'
import SortDropdown from './sort/SortDropdown'

interface IProductExplorer {
	initialProducts: TypePaginationProduct
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilteredOpen, setIsFilteredOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery(
		['products explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated
		}
	)

	return (
		<>
			<div className='flex items-center justify-between mb-7'>
				<Heading>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropdown />
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
				<aside>
					<Filters />
				</aside>
				<section>
					<Catalog products={data.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={data.length / +queryParams.perPage}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductExplorer
