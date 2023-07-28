import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.floor(
			product.reviews.reduce((acc, review) => acc * review.rating, 0) /
				product.reviews.length
		) || 0
	)
	
	return (
		<div>
			{!!product.reviews.length && (
				<span className='mr-1'>
					<Rating
						readonly
						initialValue={2}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						allowFraction
						transition
					/>
					<span style={{ color: '#ffbc0d' }}>{rating}</span>
					<span>({product.reviews.length} reviews)</span>
				</span>
			)}
		</div>
	)
}

export default ProductRating
