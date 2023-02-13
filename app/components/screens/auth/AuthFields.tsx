import { COLORS, SIZES } from '@/constants'
import { IAuthFormData } from '@/types/auth.interface'
import React from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { validEmail } from './email.rgx'

interface AuthFieldsProps {
  control: Control<IAuthFormData>
  isReg: boolean
}


const AuthFields: React.FC<AuthFieldsProps> = ({ control, isReg }) => {
  return (
    <>
      <Controller
        control={control}
        name={'name'}
        render={({
          field: { onChange, onBlur, value },
        }) => (
          <>
            <View style={[styles.wrap_input, { borderColor: 'transparent' }]}>
              <TextInput
                placeholder='name'
                placeholderTextColor={COLORS.g80}
                value={value} onChangeText={onChange} onBlur={onBlur}
                style={[styles.input, { opacity: isReg ? 1 : 0 }]}
                editable={isReg} />
            </View>
          </>
        )}
      />
      <Controller
        control={control}
        name={'email'}
        rules={{
          required: 'Email is requared',
          pattern: {
            value: validEmail,
            message: 'Your email is invalid'
          }
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error } }) => (
          <>
            <View style={[styles.wrap_input, { borderColor: error ? COLORS.errorApp : 'transparent' }]}>
              <TextInput
                placeholder='email' placeholderTextColor={COLORS.g80}
                onChangeText={onChange} onBlur={onBlur}
                style={styles.input} autoCapitalize={'none'} />
            </View >
            {!!error && <Text style={{ color: COLORS.errorApp, letterSpacing: 1 }} >{error.message}</Text>}
          </>
        )}
      />
      <Controller
        control={control}
        name={'password'}
        rules={{
          required: 'Password is requared',
          minLength: {
            value: 4,
            message: 'Password should be at least 4 chars'
          }
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error } }) => (
          <>
            <View style={[styles.wrap_input, { borderColor: error ? COLORS.errorApp : 'transparent' }]}>
              <TextInput
                placeholder='password' placeholderTextColor={COLORS.g80}
                onChangeText={onChange} onBlur={onBlur}
                style={styles.input} autoCapitalize={'none'} />
            </View >
            {!!error && <Text style={{ color: COLORS.errorApp, letterSpacing: 1 }} >{error.message}</Text>}
          </>
        )}
      />


    </>
  )
}

export default AuthFields

const styles = StyleSheet.create({
  wrap_input: {
    marginTop: SIZES.padding,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: SIZES.radius
  },
  input: {
    color: COLORS.g60,
    backgroundColor: COLORS.b50,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.base * 2,
    paddingVertical: SIZES.base,
    fontSize: SIZES.h3Mon

  }
})