import { ProductService } from '@/service/product/product.service'
import { EnumProductSort } from '@/service/product/product.types'
import { TypePaginationProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Heading from '../Heading'
import { Button } from '../button/button'
import ProductItem from './Product-item/ProductItem'
import SortDropdown from './SortDropdown'

interface ICatalog {
	data: TypePaginationProduct
	title?: string
}

const Catalog: FC<ICatalog> = ({ data, title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [page, setPage] = useState(1)
	console.log(page)
	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				perPage: 4,
				page,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10 '>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={pageNumber}
									onClick={() => setPage(pageNumber)}
									className='text-sm mx-3'
									variant={page === pageNumber ? 'dark' : 'light'}
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div className=''>нету продуктов</div>
			)}
		</section>
	)
}

export default Catalog
