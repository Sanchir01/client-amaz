import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { CurrentUser } from './../../../../../server/src/decorators/user.decorator';

const AddToCartButton: FC<{product:IProduct}> = ({product}) => {
   const{} = useActions()
   const{items} =useCart()
   const CurrentElement = items.find( cartItem => cartItem.product.id === product.id)
  return <div>AddToCartButton</div>
}

export default AddToCartButton