import { StyleSheet, Text, View,Image,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function Sing_in({navigation}) {
  return (
    <View style={styles.containerSing_in}>
      <View style={styles.contentSing_in}>
        <View style={styles.banerSing_in}>
        <Image source={require('../img/Mask_Group.png')} style={{height:'100%'}} />
        </View>
        <View style={styles.detailSing_in}>
          <View>
            <Text style={styles.detail_Title}>
              Get your groceries width nectar
            </Text>
            <TouchableOpacity style={styles.detai_input} onPress={()=>navigation.navigate('Number')}>
            <View style={styles.input}>
              <Image source={require('../img/icon_number.png')} />
              <Text style={styles.inputNumber}>+ 880</Text>
            </View>
            </TouchableOpacity>
          
          </View>
          <Text style={styles.OrConnect}> Or connect width social media</Text>
          <View style={styles.btnSing_in}>
            <TouchableOpacity style={[styles.btn_gg,styles.btn]}>
              <Image source={require('../img/icon_gg.png')}/>
              <Text style={styles.textBtn}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn_Fb,styles.btn]}>
              <Image source={require('../img/icon_fb.png')}/>
              <Text  style={styles.textBtn}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerSing_in:{
    flex:1,
    backgroundColor:'#FBFBFB'
  },
  contentSing_in:{
    flex:1,

  },
  banerSing_in:{
    flex:0.88
  },
  detailSing_in:{
    padding:20,
  },
  detail_Title:{
    width:'82%',
    fontSize:28,
    fontWeight:'bold',
    paddingBottom:30,
  },
  detai_input:{
    paddingTop:20,
    paddingBottom:15,
    flexDirection:'row',
    gap:10,
    borderBottomWidth:0.5,
    borderColor:'#ccc'
  },
  
  input:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
  inputNumber:{
    fontWeight:'bold',
    fontSize:16
  },
 
  OrConnect:{
    textAlign:'center',
    padding:30,
    color:"#828282"
  },
  btnSing_in:{
    flexDirection:'column',
    gap:30,
  },
  btn:{
    height:60,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    padding:20,
  },
  btn_Fb:{
    
    backgroundColor:'#4A66AC'
  },
  btn_gg:{
    backgroundColor:'#5383EC'
  },
  textBtn:{
    color:'#fff',
    fontWeight:'bold',
    paddingLeft:'20%',
  },
})