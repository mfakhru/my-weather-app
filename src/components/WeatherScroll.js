import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

import FutureForecast from "./FutureForecast";

function weatherScroll({ weatherData }) {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempEl
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
}

const CurrentTempEl = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
    };
    return (
      <View style={styles.currentCondition}>
        <Text style={styles.day}>{moment(data.dt * 1000).format("dddd")}</Text>
        <View style={styles.currentTempContainer}>
          <Image source={img} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.temp}>Condition</Text>
            <Text style={styles.condition}>{data.weather[0].main}</Text>
            <Text style={styles.temp}>Temperature</Text>
            <Text style={styles.temp}>Day ~ {data.temp.day}&#176;C</Text>
            <Text style={styles.temp}>Night ~ {data.temp.night}&#176;C</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.5,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  currentTempContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  currentCondition: {
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 140,
    height: 140,
  },
  condition: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#14274E",
    marginBottom: 5,
  },
  contentContainer: {
    flexDirection: "column",
    paddingRight: 30,
  },
  day: {
    height: 45,
    width: 200,
    fontSize: 20,
    fontWeight: "bold",
    color: "#14274E",
    backgroundColor: "#EEEEEE",
    padding: 10,
    textAlign: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  temp: {
    fontSize: 15,
    color: "#14274E",
    fontWeight: "600",
  },
});

export default weatherScroll;
