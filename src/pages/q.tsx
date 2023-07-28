import CatalogNoPagination from '@/components/ui/catalog/CatalogNoPagination'
import Layout from '@/components/ui/layout/Layout'
import { Meta } from '@/components/ui/meta'
import { ProductService } from '@/service/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const q: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery(['search product', query.term], () =>
		ProductService.getAll({ searchTerm: query.term as string })
	)

	return (
		<Meta title='Поиск'>
			<Layout>
				<CatalogNoPagination
					products={data?.products || []}
					title={`Поиск по запросу "${query.term || ''}"`}
				></CatalogNoPagination>
			</Layout>
		</Meta>
	)
}

export default q
