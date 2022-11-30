import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import style from "./start-style";

export function Start() {
    console.log('I\'m here! Start');
    return (
        <View style={style.container}>
            <Image source={require('../../assets/weatherlogo.png')} style={style.logo} />
            <Text style={style.logoText}>
            Portugal Weather
            </Text>          
        </View>
    );   
}