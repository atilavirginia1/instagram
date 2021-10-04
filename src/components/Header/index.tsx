import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export function Header(){
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image source={require('../../assets/logo.png')}
                style={styles.logo}
            />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={require('../../assets/send.png')}
                style={styles.send}
            />
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: 0.3,
        shadowColor: '#000',
        elevation: 1
    },

    logo: {

    },

    send:{
        width: 23,
        height: 23
    }
})