import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/service/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoritesButton: FC<{ productId: number }> = ({ productId }) => {
	const {user} = useAuth()
	if(!user) return null
	const queryClient = useQueryClient()
	const { profile } = useProfile()

	
	const { mutate } = useMutation(['toggle favorites'], () =>
		UserService.toggleFavorite(productId),{
			onSuccess:() =>{
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)
	if(!profile) return null
	const isExist = profile.favorites.some(
		favorites => favorites.id === productId
	)
	return (
		<div>
			<button className='text-primary' onClick={() => mutate()}>
				{isExist ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoritesButton
