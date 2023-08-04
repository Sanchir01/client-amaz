import { getAdminUrl } from '@/config/url.config'
import { IMenuItem } from './menu.interface'

export const ADMIN_MENU: IMenuItem[] = [
	{ label: 'Dashboard', href: getAdminUrl('/') },
   {label: 'Products', href: getAdminUrl('/products')},
   {label: 'Categories', href: getAdminUrl('/category')},
   {label: 'Review', href: getAdminUrl('/rewiev')}
]
