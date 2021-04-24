import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export const NavBar = ({ title }) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#9966CC',//аметистовый
        paddingBottom: 10
    },
    text: {
        color: '#FFE4C4',//Бисквитный
        fontSize: 20
    }
})