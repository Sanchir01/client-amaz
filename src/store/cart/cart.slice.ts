import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAddToCartPayload, ICartInitialState, IChangeQuantityPayload } from './cart.types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }:PayloadAction<IAddToCartPayload>) => {
			const isExistSize = state.items.some(
				item => item.product.id === payload.product.id
			)

			if (!isExistSize) state.items.push({ ...payload, id: state.items.length })
		},
		removeFromCart: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== payload.id)
		},

		changeQuantity: (
			state,
			{ payload }: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = payload

			const item = state.items.find(item => item.id === id)
			if (item) type === 'plus' ? item.quantity++ : item.quantity--
		},
		reset: state => {
			state.items = []
		}
	}
})
