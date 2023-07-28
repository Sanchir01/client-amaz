import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as userActions from '../store/user/user.actions'
import { cartSlice } from '@/store/cart/cart.slice'


const allActions = {
   ...userActions,
	...cartSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(allActions,dispatch),[dispatch])
}
