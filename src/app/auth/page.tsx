import Auth from '@/components/screens/Auth/Auth'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'



export const metadata: Metadata = {
   title: 'Auth',
   ...NO_INDEX_PAGE
}

export default function AuthPage() {
   return <Auth/>
}
