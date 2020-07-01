import React, { Component } from 'react'
import {StyleSheet,Text} from 'react-native'

import defaultStyles from '../config/DefaultStyles'; // import default styles

const AppText = ({children, style, ...otherProps})=>{
    return(
    <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:16
    }
});

export default AppText;