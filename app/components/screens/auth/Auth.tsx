import Loader from '@/components/UI/layout/Loader'
import MyButton from '@/components/UI/layout/MyButton'
import { COLORS, SIZES } from '@/constants'
import { useAuth } from '@/hooks/useAuth'
import { IAuthFormData } from '@/types/auth.interface'
import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { View, Text, StyleSheet, Keyboard, ViewStyle, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native'
import AuthFields from './AuthFields'
import { validEmail } from './email.rgx'


const Auth: React.FC = () => {
  const [isReg, setIsReg] = useState(false)

  const { control, handleSubmit, reset, register } = useForm<IAuthFormData>({
    mode: 'onChange'  // мод проверяет input на момент написания, а не в отправке 
  })

  const { user, setUser } = useAuth()


  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    setUser({
      _id: '',
      ...data  // тоже самое ==> email: data.email, password: data.password
    })
    reset()
  }

  console.log(handleSubmit);

  const isLoading = false  // временно

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss} // скрытие клавиатуры при нажатии на любую точку области TouchableWithoutFeedback
      accessible={false}
    >
      <View style={styles.wrap_auth}>
        <View style={{ width: '75%' }}>
          <View style={{}}>
            <Text style={styles.textAuth}>{isReg ? 'Sign up' : 'Sign in'}</Text>
          </View>

          {isLoading ? <Loader /> :
            <>
              <AuthFields control={control} isReg={isReg} />

              <MyButton onPress={handleSubmit(onSubmit)} container={{ backgroundColor: COLORS.secondary, marginTop: SIZES.padding, alignSelf: 'center' }} >Let's go</MyButton>

              <Pressable onPress={() => setIsReg(!isReg)} style={styles.wrap_press}>
                <Text style={styles.textReg}>{isReg ? 'Login' : 'Register'}</Text>
              </Pressable>
            </>}

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Auth

const styles = StyleSheet.create({
  wrap_auth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap_press: {
    paddingHorizontal: SIZES.base * 3,
    paddingVertical: SIZES.base * 2,
    alignSelf: 'flex-end',
  },
  textAuth: {
    color: COLORS.w80,
    fontSize: SIZES.h1Mon,
    textAlign: 'center'
  },
  textReg: {
    color: COLORS.w80,
    fontSize: SIZES.h3Mon,
    opacity: 0.6,
    textAlign: 'right'
  },
})
