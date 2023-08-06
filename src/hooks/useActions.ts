import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as userActions from '../store/user/user.actions'
import { cartSlice } from '@/store/cart/cart.slice'
import { carouselSlice } from '@/store/carousel/carousel.slice'
import { filterSlice } from '@/store/filters/filters.slice'


const allActions = {
   ...userActions,
	...cartSlice.actions,
	...carouselSlice.actions,
	...filterSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(allActions,dispatch),[dispatch])
}
