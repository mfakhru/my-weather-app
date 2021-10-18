import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from "moment-timezone";

const FutureForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forcastItem={data} />
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({ forcastItem }) => {
  const img = {
    uri:
      "https://openweathermap.org/img/wn/" +
      forcastItem.weather[0].icon +
      "@2x.png",
  };
  return (
    <View style={styles.futureForecastContainer}>
      <Text style={styles.day}>
        {moment(forcastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.condition}>{forcastItem.weather[0].main}</Text>

      <Text style={styles.temp}>Night ~ {forcastItem.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Day ~ {forcastItem.temp.day}&#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  futureForecastContainer: {
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#787A91",
    borderWidth: 2,
    padding: 10,
    marginLeft: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  day: {
    fontSize: 20,
    width: 90,
    color: "white",
    backgroundColor: "#293B5F",
    padding: 10,
    textAlign: "center",
    borderRadius: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
  condition: {
    marginTop: -10,
    fontSize: 20,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  temp: {
    fontSize: 15,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
});

export default FutureForecast;
