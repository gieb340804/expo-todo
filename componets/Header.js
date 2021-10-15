import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>START</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e6ecf8',
        height: 85,
        fontWeight: '900',
        alignItems: 'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,
    },headerText: {
        marginTop: 20,
        paddingTop: 20,
        fontSize: 20
    }
  });
