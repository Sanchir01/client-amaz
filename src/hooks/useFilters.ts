import { TypeProductDataFilters } from '@/service/product/product.types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export const useFilters = () => {
	const pathname = usePathname()

	const searchParams = useSearchParams()

	const { updateQueryParam } = useActions()

	const { replace } = useRouter()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({ key: key as keyof TypeProductDataFilters, value })
		})
	}, [])

	const updateQueryParams = (
		key: keyof TypeProductDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		replace(pathname + `?${newParams.toString().replace(/%7c/g, '|')}`)

		updateQueryParam({ key, value })
	}
	return { updateQueryParam, queryParams, isFilterUpdated }
}
