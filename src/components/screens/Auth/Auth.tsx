'use client'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../../ui/Heading'
import { Button } from '../../ui/button/button'
import Field from '../../ui/input/Field'

import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else setType('register'), register(data)
		reset()
	}
	return (
		<section className='flex h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-bg-color shadow-sm p-8 m-auto'
			>
				<Heading className='capitalize text-center mb-4'>{type}</Heading>
				<Field
					{...formRegister('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter valid Email'
						}
					})}
					placeholder='Email'
					error={errors.email?.message}
				/>
				<Field
					{...formRegister('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min 6 символов'
						}
					})}
					type='password'
					placeholder='password'
					error={errors.password?.message}
				/>
				{type === 'register' && (
					<Field
						{...formRegister('name', {
							required: 'Name is required',
							minLength: {
								value: 5,
								message: 'Min 6 символов'
							}
						})}
						placeholder='name'
						error={errors.name?.message}
					/>
				)}
				<button
					type='button'
					onClick={() => setType(type === 'login' ? 'register' : 'login')}
				>
					Перейти на {type}
				</button>
				<Button type='submit' variant='dark'>
					Lets go
				</Button>
			</form>
		</section>
	)
}

export default Auth
