import { IUser } from './user.interface'

export interface IAuthFormData extends Pick<IUser, 'password' | 'email'> {
	name: string
}
