import { useDebounce } from '@/hooks/useDebounce'
import { FC, useEffect, useState } from 'react'
import styles from './range.module.scss'

interface IRange {
	max?: number
	min?: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: string) => void
	onChangeToValue: (value: string) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	onChangeFromValue,
	onChangeToValue,
	toInitialValue,
	fromInitialValue
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')

	const debounceFromValue = useDebounce(fromValue, 1000)
	const debounceToValue = useDebounce(toValue, 1000)

	useEffect(() => {
		onChangeFromValue(debounceFromValue)
	}, [debounceFromValue])

	useEffect(() => {
		onChangeToValue(debounceToValue)
	}, [debounceToValue])

	return (
		<div className={styles.range}>
			<input
				type='number'
				min={min}
				max={max}
				placeholder='from'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
			/>
			{'-'}
			<input
				type='number'
				min={min}
				max={max}
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
			/>
		</div>
	)
}

export default Range
