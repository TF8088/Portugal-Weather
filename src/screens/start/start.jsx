import style from "./start-style";
import { View, Text, Image } from "react-native";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import { getCords } from "../../components/location";

export function Start() {
    getCords();


    return (
        <View style={style.container}>
            <Image source={require('../../assets/weatherlogo.png')} style={style.logo} />
            <Text style={style.logoText}>
            Portugal Weather
            </Text>          
        </View>
    );   
}