import React from "react";
import {StyleSheet, View, Button} from "react-native";

export default function Navdar() {

    const alertButtomText = () => Alert.prompt(
        "Введите пожалуйста текст",
        "86tghj",
        text => console.log(text)
      );

    return(
        <View style={styles.navdar}>
            <View style={styles.navdarContener}>
                <Button onPress={alertButtomText}
  title="Learn More"
  color="#841584"
  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navdar: {
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        height: 70,
        backgroundColor: '#e6ecf8'
    },
    navdarContener: {
        width: '80%',
        height: 70,
        backgroundColor: 'red'
    }
})

