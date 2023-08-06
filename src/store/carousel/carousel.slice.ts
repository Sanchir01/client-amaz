import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICarouselInitialState {
	selectedItemIndex: number
}
const initialState: ICarouselInitialState = {
	selectedItemIndex: 0
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (
			state,
			{ payload }: PayloadAction<{ carouselLength: number }>
		) => {
			if (state.selectedItemIndex !== payload.carouselLength - 1)
				state.selectedItemIndex += 1
			else state.selectedItemIndex = 0
		},
		prevSlide: state => {
			if (state.selectedItemIndex > 0) state.selectedItemIndex -= 1
		},
		selectedSlide: (state, { payload }: PayloadAction<number>) => {
			state.selectedItemIndex = payload
		}
	}
})
