import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

export async function getCords() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [loaded, setloaded] = useState(false);
  const data = {
    lat: 0,
    long: 0
  }

  useEffect(() => {
    (async () => {
      // Ask For Permission
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get Long Lat City
      let getlocation = await Location.getCurrentPositionAsync({});
      // Save
      setLong(getlocation.coords.longitude);
      setLat(getlocation.coords.latitude);
      setloaded(true);
    })()
  }, []);

  if (loaded == true) {
    data.lat = lat
    data.long = long
    return data
  }
  else return 'Permission to access location was denied';
}
