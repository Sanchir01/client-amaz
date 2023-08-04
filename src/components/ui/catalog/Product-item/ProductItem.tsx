import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import FavoritesButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className=''>
			<div className=' bg-bg-color rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-10'>
					<FavoritesButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
						className='block mx-auto'
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mt-2 font-semibold'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} isText/>
			<div className='text-xl font-semibold'>{product.price} $</div>
		</div>
	)
}

export default ProductItem
