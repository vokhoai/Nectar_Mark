import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function Number({navigation}) {
  return (
    <View style={{flex:1}}>
     <View style={[styles.headerNumber,styles.HomeShadown]}>
      <TouchableOpacity onPress={()=>navigation.navigate("Sing_in")}>
        <Image source={require('../img/icon_arrow.png')}/>
      </TouchableOpacity>
     </View>
     <ScrollView style={{height:'80%',flex:0.8}}>
     <View style={styles.contentNumber}>
      <Text style={styles.titleNumber}>Enter your mobile  number</Text>
      <View style={styles.Number}>
        <Text style={styles.detailNumber}>Mobile Number</Text>
        <View style={styles.inputNumber}>
          <Image source={require('../img/icon_number.png')}/>
          <TextInput
          placeholder='+880'
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
    justifyContent:'flex-end'
  },
  tabOPT:{
    height:60,
    width:60,
    backgroundColor:'#53B175',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    
  }
})