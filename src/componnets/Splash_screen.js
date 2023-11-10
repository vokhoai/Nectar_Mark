import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
export default function Splash_screen({navigation}) {
  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigation.navigate('Onbording');
      return () => clearTimeout(timer);
    },2000)
  })
  return (
    <View style={styles.container_Splash}>
     <View>
      <Image
      source={require('../img/logo.png')}
      />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container_Splash:{
    flex:1,
    backgroundColor:"#53B175",
    justifyContent:'center',
    alignItems:'center'
  },
})