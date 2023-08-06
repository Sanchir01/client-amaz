import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import type { PropsWithChildren } from 'react'

import Header from '@/components/ui/layout/Header/Header'
import Sidebar from '@/components/ui/layout/Sidebar/Sidebar'
import { getSiteUrl } from '@/config/url.config'
import { NO_INDEX_PAGE, SITE_NAME } from '@/constants/app.constants'
import type { Metadata } from 'next'

import {Golos_Text} from 'next/font/google'

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

const golos = Golos_Text({
	display:'swap',
	subsets:['latin','cyrillic-ext'],
	style:['normal'],
	weight:['400','500','600','700'],
	variable:'--font-golos'
})

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='ru' className={golos.variable}>
			<body>
				<Providers>
					<div className='bg-secondary'>
						<Header />
						<main className='grid ' style={{ gridTemplateColumns: '.8fr 4fr' }}>
							<Sidebar />
							<div className='p-12 pb-52 bg-bg-color rounded-tl-lg'>{children}</div>
						</main>
					</div>
				</Providers>
				<div id='modal' className=''></div>
			</body>
		</html>
	)
}
