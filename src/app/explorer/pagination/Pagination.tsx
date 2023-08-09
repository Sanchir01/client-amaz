import { Button } from '@/components/ui/button/button'
import { FC } from 'react'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number | string
}

const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage
}) => {
	return (
		<div className='text-center mt-16'>
			{Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
				(_, index) => {
					const pageNumber = (index + 1).toString()
					return (
						<Button
							key={pageNumber}
							variant={currentPage === pageNumber ? 'dark' : 'light'}
							onClick={() => changePage(pageNumber)}
							disabled={currentPage === pageNumber}
							className='mx-3'
						>
							{pageNumber}
						</Button>
					)
				}
			)}
		</div>
	)
}

export default Pagination
