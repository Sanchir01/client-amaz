import CatalogNoPagination from '@/components/ui/catalog/CatalogNoPagination'
import Layout from '@/components/ui/layout/Layout'
import { Meta } from '@/components/ui/meta'
import { CategoryService } from '@/service/category/category.service'
import { ProductService } from '@/service/product/product.service'
import { ICategory } from '@/types/category.interfcae'
import { IProduct } from '@/types/product.interface'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const CategoryPage: NextPage<{
	products: IProduct[]
	category: ICategory
}> = ({ category, products }) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<CatalogNoPagination products={products || []} title={category.name} />
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths  = async () => {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})
	return{ paths, fallback: 'blocking'}
}


export const getStaticProps:GetStaticProps = async ({params}) => {
	const {data:products} = await ProductService.getByCategory(params?.slug as string)

	const {data:category} = await CategoryService.getBySlug(params?.slug as string)

	return {
		props:
		{products, category}
	}
}


export default CategoryPage
