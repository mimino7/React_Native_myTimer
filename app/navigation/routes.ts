import { IRout } from './navigation.types'

import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Settings from '@/components/screens/settings/Settings'
import Statistics from '@/components/screens/statistics/Statistics'

export const routes: IRout[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Statistics',
		component: Statistics
	}
]
