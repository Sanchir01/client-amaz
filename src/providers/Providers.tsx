'use client'
import AuthProvider from '@/providers/auth-providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store ,persistor} from './../store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function Providers({children}: PropsWithChildren<unknown>) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider >
						{children}
					</AuthProvider>
				</PersistGate>
			</QueryClientProvider>
		</Provider>
	)
}
