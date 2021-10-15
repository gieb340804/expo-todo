import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, SafeAreaView, View, Button, Alert, Image} from 'react-native';



export default function App() {
  const image = {uri: "https://reactjs.org/logo-og.png"};

  return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
    </View>
  );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  
