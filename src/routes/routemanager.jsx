import React , { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Start } from '../screens/start/start';
import { Home } from '../screens/Home/home';
 

export default function RouteManager() {
    
    const [firststart, setfirststart] = useState(Boolean);
    
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
        /* Start -> First load */
        return Start();
    } else {
        /* Load Data -> Show Home Page */
        return Home();
    }
}