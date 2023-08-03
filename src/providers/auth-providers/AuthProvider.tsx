'use client'
import { ADMIN_PANEL_URL } from '@/config/url.config'
import { REFRESH_TOKEN } from '@/constants/token.constants'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { getAccessToken } from '@/service/auth/auth.helper'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import { protectedRoutes } from './Protected-routes'
import NotFound from '@/app/not-found'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const pathName = usePathname()
	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logout()
	}, [pathName])

	const router = useRouter()

	const isProtectedRoute = protectedRoutes.some(route =>
		pathName?.startsWith(route)
	)

	const isAdminRoute = pathName?.startsWith(ADMIN_PANEL_URL)

	if (!isAdminRoute && !isProtectedRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>

	if(user && isProtectedRoute) return <>{children}</>

	if(user && isAdminRoute) return <><NotFound/></>
	
	pathName !== '/auth ' && router.replace('/auth')
	 
	return null
}

export default AuthProvider
