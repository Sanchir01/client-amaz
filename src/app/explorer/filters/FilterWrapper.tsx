import { FC, PropsWithChildren } from 'react'

interface IFilterWrapper {
	title: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	children,
	title
}) => {
	return (
		<div className='mb-6'>
         <div className="mb-6 font-semibold">{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWrapper
