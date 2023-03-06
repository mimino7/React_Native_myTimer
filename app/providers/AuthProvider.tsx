import { StyleSheet, Text, View } from 'react-native'
import React, { FC, createContext, Dispatch, SetStateAction, PropsWithChildren, useState, useEffect } from 'react'
import { IUser } from '@/types/user.interface'
import * as Splash from 'expo-splash-screen'

export type TypeUserState = IUser | null

interface IContext {
  user: TypeUserState
  setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext<IContext>({ user: null, setUser: () => { } });

let ignor = Splash.preventAutoHideAsync()
interface AuthProviderProps {

}

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

  const [user, setUser] = useState<TypeUserState>({} as IUser);

  useEffect(() => {
    let isMounted = false
    console.log(isMounted);

    const getUserFromStorage = async () => {
      if (isMounted) {
        // Get user from async storage and write to store
      }
      await Splash.hideAsync()
    }
    let ignore = getUserFromStorage()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

const styles = StyleSheet.create({})