import Checkbox from '@/components/ui/Checkbox/Checkbox'
import { useFilters } from '@/hooks/useFilters'
import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'
import { updateRatingsQuery } from './UpdateRatingsQuery'
import { RATING_VARIANTS } from './ratingVariants.data'

const RatingsGroup: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()
	return (
		<FilterWrapper title='Number of reviews'>
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString()) }
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRatingsQuery(queryParams?.ratings , rating.toString())
						)
					}
					key={rating}
					className='mb-2 text-sm'
				>{rating}</Checkbox>
			))}
		</FilterWrapper>
	)
}

export default RatingsGroup
