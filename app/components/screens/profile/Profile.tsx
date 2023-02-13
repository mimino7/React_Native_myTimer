import { ShadowPropTypesIOS, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@/constants'
import Layout from '@/components/UI/layout/Layout'
import MyButton from '@/components/UI/layout/MyButton'
import { useAuth } from '@/hooks/useAuth'
import { Shadow, } from 'react-native-shadow-2';


interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = (props) => {

  const { setUser } = useAuth()

  return (
    <Layout title='Profile'>

      <View style={{ alignItems: 'center', }}>
        <View style={{
          marginVertical: SIZES.padding,
          paddingVertical: SIZES.padding / 3,
        }}></View>
        <Shadow distance={10} startColor={COLORS.shdw3} offset={[0, 0]} style={{ borderRadius: SIZES.radius, width: 200, alignItems: 'center' }} >
          <MyButton onPress={() => setUser(null)} container={{ backgroundColor: COLORS.secondary }}>
            Log Out
          </MyButton>
        </Shadow>
      </View>

    </Layout >
  )
}

export default Profile

const styles = StyleSheet.create({})