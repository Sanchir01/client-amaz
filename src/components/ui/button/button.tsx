import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light'
}

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				className,
				{
					'text-white  bg-primary': variant === 'dark',
					'text-primary bg-white': variant === 'light'
				},
				'rounded-xl font-medium shadow py-2 px-10 hover:shadow-lg transition duration-300 ease-in-out'
			)}
		>
			{children}
		</button>
	)
}
