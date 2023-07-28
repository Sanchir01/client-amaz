import Home from '@/components/screens/Home/Home'
import { ProductService } from '@/service/product/product.service'
import { TypePaginationProduct } from '@/types/product.interface'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const HomePage: NextPage<{ data: TypePaginationProduct }> = ({
	data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <Home products={data?.products} length={data.length} />
}

export const getStaticProps: GetStaticProps<{
	data: TypePaginationProduct
}> = async () => {
	const data  = await ProductService.getAll()
	
	return {
		props: { data },
		revalidate: 60
	}
}

export default HomePage
