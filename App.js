import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './componets/Header';
import Navdar from './componets/Navbar';
import {ImageBackground, StyleSheet, Text, SafeAreaView, View, Button, Alert, Image ,TouchableHighlight } from 'react-native';



export default function App() {
  const image = {uri: "https://reactjs.org/logo-og.png"};

  
    

  
const imageBackgroundUri = require('./assets/jb0C6ZMSSlU.jpg');
const handleTextPress = () => console.log('проверка кода');
const alertButtomText = () => Alert.prompt(
  "Введите пожалуйста текст",
  "86tghj",
  text => console.log(text)
);
const handleButtonText = () => Alert.alert (
  "good",
  "",
  [
    {text: 'next',
     onPress: () => console.log('работаетgood')
  },
    {text: 'goodOne',
    onPress: () => console.log('sldfs')
  }
   
  ]
);


  return (
    
      <ImageBackground source={imageBackgroundUri} resizeMode="center"  style={styles.image}>
        
    <SafeAreaView style={styles.container} >
    <Header/>
      <View style={styles.containerBlock}>
      
      <View style={styles.blocAdd}>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7cb7aabd403cba9099c9f4d11c0762e3/ec3d3aaf46795a744a456dd10575948dda9e170e160a54a472537ff8f6bb8b47.jpg',}}
        />
      
      </View>
      </View>
      <Navdar></Navdar>
    </SafeAreaView>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },containerBlock: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20
  },bloc: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },poppingUp:{
    marginTop: 10,
  },blocAdd: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 10
  },tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "center"
    
  },image: {
    flex: 1,
    
  }
});
