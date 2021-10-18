import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, Component } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";

const img = require("../img/sky.jpg");
const API_KEY = "1cae5095b382ee3e4a4314266eaccd90";

export default function MainScreen({ route }) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync();

      if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of response) {
          let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}, ${item.region}, ${item.country}, ${item.subregion}, ${item.district}`;
          console.log(address);
          fetchDataFromApi("-6.497641", "106.828224");
        }
      }
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imagesBack}>
        <DateTime
          nama={route.params.data}
          current={data.current}
          city={route.params.selectedCity}
          country={route.params.selectedProv}
        />
        <WeatherScroll weatherData={data.daily} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
