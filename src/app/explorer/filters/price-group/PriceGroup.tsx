import Range from '@/components/ui/range/Range'
import { useFilters } from '@/hooks/useFilters'

import { FC } from 'react'
import FilterWrapper from '../FilterWrapper'
const PriceGroup: FC = () => {
	const { updateQueryParams, queryParams } = useFilters()
	return (
		<FilterWrapper title='Price from/to'>
			<Range
				max={2000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateQueryParams('minPrice', value)}
				onChangeToValue={value => updateQueryParams('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
