import CatalogNoPagination from '@/components/ui/catalog/CatalogNoPagination'

import { useProfile } from '@/hooks/useProfile'
import { NextPage } from 'next'

const FavoritesPage: NextPage = () => {
	const { profile } = useProfile()
	return (
		<>
			<CatalogNoPagination
				products={profile?.favorites || []}
				title={'Favorites'}
			/>
		</>
	)
}

export default FavoritesPage
