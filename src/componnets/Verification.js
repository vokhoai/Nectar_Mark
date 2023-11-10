import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function Verification({navigation}) {
  return (
    <View style={{flex:1}}>
    <View style={[styles.headerNumber,styles.HomeShadown]}>
     <TouchableOpacity onPress={()=>navigation.navigate("Number")}>
       <Image source={require('../img/icon_arrow.png')}/>
     </TouchableOpacity>
    </View>
    <ScrollView style={{height:'80%',flex:0.8}}>
    <View style={styles.contentNumber}>
     <Text style={styles.titleNumber}>Enter your 4-digit code</Text>
     <View style={styles.Number}>
       <Text style={styles.detailNumber}>Code</Text>
       <View style={styles.inputNumber}>
         <TextInput
         placeholder='- - - -'
         placeholderTextColor={'#000'}
         inputMode='tel'
         autoFocus={true}
         style={styles.input}
         />
       </View>
     </View>
    </View>
    
    </ScrollView>
    <TouchableOpacity  style={styles.nextNumber} onPress={()=>navigation.navigate("Verification")}>
    <Text style={styles.ResendCode}>Resend Code</Text>
    <View style={styles.tabOPT}>
       <Image source={require('../img/icon_right.png')} />
     </View>
    </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  headerNumber:{
    padding:20,
    marginTop:10,
    flex:0.01
  },
  contentNumber:{
    padding:20,
  },
  HomeShadown:{
    shadowColor:'#3333',
    shadowOffset:{
      width:10,
      height:1,
    },
  },
  titleNumber:{
    fontSize:26,
    fontWeight:'600',
    marginTop:40,
    paddingBottom:30,
  },
  detailNumber:{
    color:'#7C7C7C',
    paddingBottom:20,
  },
  inputNumber:{
    flexDirection:'row',
    gap:10,
    paddingBottom:15,
    borderBottomWidth:1,
    borderColor:'#E2E2E2'
  },
  input:{
    fontWeight:600,
    fontSize:16
  },
  nextNumber:{
    flexDirection:'row',
    padding:30,
    justifyContent:'space-between',
    alignItems:"center",
  },
  tabOPT:{
    height:60,
    width:60,
    backgroundColor:'#53B175',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    
  },
  ResendCode:{
    color:'#53B175',
    fontWeight:'500',
    fontSize:18
  },
})