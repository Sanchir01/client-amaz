import '@/assets/styles/globals.css'
import AuthProvider from '@/providers/auth-providers/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-providers/auth-page.types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './../store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate loading={null} persistor={persistor}></PersistGate>
				<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
					<Component {...pageProps} />
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}
