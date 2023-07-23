import { forwardRef } from 'react'
import { IField } from './Field.interface'

import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, className, style, Icon, error, type = 'text' ,...rest}, ref) => {
		return (
			<div className={cn('mb-5', className)}>
				<label>
					<span>
						{Icon && <Icon className='mb-2 block' />}
						{placeholder}
					</span>
					<input
               placeholder={placeholder}
						className={cn(
							'px-4 py-2 w-full outline-none  border-gray border-solid focus:border-primary transition-all placeholder:font-normal rounded-lg',
							{
								'border-red': !!error
							}
						)}
						ref={ref}
						type={type}
						{...rest}
					></input>
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
