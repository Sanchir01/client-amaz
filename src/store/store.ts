'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { carouselSlice } from './carousel/carousel.slice'
import { cartSlice } from './cart/cart.slice'
import { userSlice } from './user/user.slice'
import { filterSlice } from './filters/filters.slice'

const persistConfig = {
	key: 'amazon-2',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userSlice.reducer,
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer,
	filters:filterSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof persistedReducer>
