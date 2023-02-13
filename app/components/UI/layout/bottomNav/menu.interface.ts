import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { Feather } from '@expo/vector-icons'

export type TypeNav = (name: keyof TypeRootStackParamList) => void

export interface IMenuItem {
	name: keyof typeof Feather.glyphMap
	path: keyof TypeRootStackParamList
}
