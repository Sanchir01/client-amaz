import { Select } from '@/components/ui/select/Select'
import { useFilters } from '@/hooks/useFilters'
import { EnumProductSort } from '@/service/product/product.types'
import { FC } from 'react'
import { SORT_SELECT_DATA } from './sort-select.data'

const SortDropdown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	return (
		<div className='text-center z-40'>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				value={SORT_SELECT_DATA.find(value => value.key === queryParams.sort)}
				title='Sort by'
			/>
		</div>
	)
}

export default SortDropdown
