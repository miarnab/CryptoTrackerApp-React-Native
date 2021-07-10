import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { image } from '../utils/CoinIcons';

const style = StyleSheet.create({
    container:{
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol:{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontweight: 'bold'
    },
    separator:{
        marginTop: 10
    },
    coinPrice:{
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold'
    },
    image:{
        width: 35,
        height: 35
    },
    moneySymbol:{
        fontWeight: 'bold'
    },
    
}) 