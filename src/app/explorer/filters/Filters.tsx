import { FC } from 'react'
import CategoryGroup from './categoryGroup/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'
import RatingsGroup from './ratings-variants/RatingsGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RatingsGroup />
		</div>
	)
}

export default Filters
