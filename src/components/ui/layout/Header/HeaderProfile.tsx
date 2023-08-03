'use client'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { FC } from 'react'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	return (
		<>
			{profile?.avatarPath && (
				<Image
					src={profile?.avatarPath}
					width={43}
					height={43}
					alt='profile'
					className='rounded-full border-primary border border-solid '
				/>
			)}
		</>
	)
}

export default HeaderProfile
