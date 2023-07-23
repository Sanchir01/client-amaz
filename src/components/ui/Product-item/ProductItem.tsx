import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div className=''>
				<FavoritesButton productId={product.id} />
				<AddToCartButton product={product} />
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
         <div className="">{product.category.name}</div>
         <ProductRating rating={product.}
		</div>
	)
}

export default ProductItem
