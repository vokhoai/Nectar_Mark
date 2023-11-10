import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Onbording({navigation}) {
  return (
    <ImageBackground source={require('../img/banner.png')} style={styles.background_Onbording} >
      <View style={styles.containerOnbording}>
      <View style={styles.contentOnbording}>
      <Image source={require('../img/icon_carot.png')} />
     <View style={{flex:1}}>
     <Text style={styles.title_Onbording}>Welcome to our store</Text>
      <Text style={styles.detail_Onbording}>Ger your groceries in as fast as one hour</Text>
     </View>
      <View style={styles.getStared}>
        <TouchableOpacity onPress={()=>navigation.navigate("Sing_in")}>
         <View style={styles.btnGet}>
          <Text style={styles.textbtnGet}>
            Get Stared
          </Text>
         </View>
        </TouchableOpacity>
      </View>
     </View>
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({ 
  background_Onbording: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  containerOnbording: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
 
  contentOnbording: {
    flex:0.5,
    width:'100%',
    // height: '50%',
    marginBottom:70,
    padding:15,
    flexDirection: 'column',
    justifyContent: 'center',
    gap:40,
    alignItems: 'center',
  
  },
  title_Onbording: {
    fontSize:48,
    alignItems:'center',
    color:'#fff',
    fontWeight:'600',
    textAlign:'center',
   paddingRight:65,
   paddingLeft:65,
  },
  detail_Onbording:{
    textAlign:'center',
    color:'#BAB1AB',
    paddingTop:5,
    
  },
  getStared:{
    backgroundColor:"#53B175",
    width:'100%',
    flex:0.5,
    borderRadius:20,
    marginTop:5,

  },
  btnGet:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  textbtnGet:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
   
  },
})