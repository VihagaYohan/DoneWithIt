import React, { Component } from 'react'
import {StyleSheet,Text} from 'react-native'


const AppText = ({children, style})=>{
    return(
    <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:16
    }
});

export default AppText;