import { EnumProductSort } from '@/service/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'


interface ISortDropdown {
	sortType :EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({sortType, setSortType}) => {
	return (
		<div className='text-right mb-3 z-30'>
			<select value={sortType} onChange={(e) => setSortType(e.target.value as any)} className='appearance-none py-1 px-2 bg-bg-color border-gray'>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option value={EnumProductSort[key]}>{EnumProductSort[key]}</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
