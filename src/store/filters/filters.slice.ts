import { EnumProductSort } from '@/service/product/product.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilterState, IFiltersActionsPayload } from './filter.types'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: 20,
		ratings: ''
	}
}

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (
			state,
			{ payload }: PayloadAction<IFiltersActionsPayload>
		) => {
			const { key, value } = payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
      resetFilterUpdate: state => {
         state.isFilterUpdated = false
      }
	}
})
