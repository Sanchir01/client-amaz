import CatalogNoPagination from '@/components/ui/catalog/CatalogNoPagination'
import Layout from '@/components/ui/layout/Layout'

import { Meta } from '@/components/ui/meta'
import { useProfile } from '@/hooks/useProfile'
import { NextPageAuth } from '@/providers/auth-providers/auth-page.types'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()
	return (
		<Meta title='Favorites'>
			<Layout>
				<CatalogNoPagination
					products={profile?.favorites || []}
					title={'Favorites'}
				/>
			</Layout>
		</Meta>
	)
}
FavoritesPage.isOnlyUser = true
export default FavoritesPage
