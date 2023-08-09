import Checkbox from '@/components/ui/Checkbox/Checkbox'
import { useCategories } from '@/hooks/categories/useCategories'
import { useFilters } from '@/hooks/useFilters'
import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading, isSuccess } = useCategories()
	return (
		<FilterWrapper title='Category'>
			{isLoading ? (
				<span>Loading...</span>
			) : isSuccess ? (
				data?.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()
					return (
						<Checkbox
							className='mb-2 text-sm'
							key={category.id}
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams(
									'categoryId',
									isChecked ? '' : category.id.toString()
								)
							}
						>
							{category.name}
						</Checkbox>
					)
				})
			) : (
				<p>нету категорий</p>
			)}
		</FilterWrapper>
	)
}

export default CategoryGroup
