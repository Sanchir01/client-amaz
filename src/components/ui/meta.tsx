import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

interface ISeo {
	title: string
	description?: string
	image?: string
}

export const titleMeta = (title: string) => `${title} | Amazon 2`

export const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	image,
	children,
	description
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMeta(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<meta itemProp='og:locate' content='en' />
						<meta itemProp='og:title' content={titleMeta(title)} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}
