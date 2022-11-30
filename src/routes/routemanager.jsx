import React , { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RouteManager() {
    
    const [firststart, setfirststart] = useEffect(Boolean);

    useEffect(() => {
        AsyncStorage.getItem('@firststart').then(value => {
            if (value === null) /* Never was Opened */  {
                AsyncStorage.setItem('@firststart', value = 'true'); 
                setfirststart(true);
            } else /* Was Opened */ {
                setfirststart(false);
            }
        })
    }, [])

    /* Print the status */
    console.log(firststart);

    if (firststart == true) {
        /* First Start -> First load */
    } else {
        /* Load Data -> Show Home Page */
    }

}