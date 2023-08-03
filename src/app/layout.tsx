import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import type { PropsWithChildren } from 'react'

import Header from '@/components/ui/layout/Header/Header'
import Sidebar from '@/components/ui/layout/Sidebar/Sidebar'
import { getSiteUrl } from '@/config/url.config'
import { NO_INDEX_PAGE, SITE_NAME } from '@/constants/app.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['']
	},
	...NO_INDEX_PAGE
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='ru'>
			<body>
				<Providers>
					<div>
						<Header />
						<main className='grid ' style={{ gridTemplateColumns: '1fr 4fr' }}>
							<Sidebar />
							<div className='p-12'>{children}</div>
						</main>
					</div>
				</Providers>
				<div id='modal' className=''></div>
			</body>
		</html>
	)
}
