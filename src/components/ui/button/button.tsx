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
					'btn-orange': variant === 'dark',
					'btn-white bg-white': variant === 'light'
				},
				'btn'
			)}
		>
			{children}
		</button>
	)
}
