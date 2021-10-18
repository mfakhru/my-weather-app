import { CurrentRenderContext } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>
        {value} {unit}
      </Text>
    </View>
  );
};

const dateTime = ({ nama, current, city, country }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "PM" : "AM";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          " " +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  const currentHour = new Date().getHours();

  const greetingMessage =
    currentHour >= 4 && currentHour < 12
      ? "Good morning"
      : currentHour >= 12 && currentHour <= 17
      ? "Good afternoon"
      : currentHour > 17 || currentHour < 4
      ? "Good evening"
      : "Welcome";

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{greetingMessage},</Text>
        <Text style={styles.greetName}>{nama}</Text>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.feels}>
              {current ? current.feels_like : ""}&#176;C
            </Text>
            <Text style={styles.latLong}>
              {city}, {country}
            </Text>
          </View>

          <View style={styles.rightAlign}>
            <Text style={styles.heading}>{time}</Text>
            <Text style={styles.subHeading}>{date}</Text>
          </View>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ""}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ""}
            unit="hpA"
          />
          <WeatherItem
            title="Cloudiness"
            value={current ? current.clouds : ""}
            unit="%"
          />
          <WeatherItem
            title="Wind"
            value={current ? current.wind_speed : ""}
            unit="m/s"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  subContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: 25,
    marginTop: 20,
    color: "white",
  },
  greetName: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 30,
    color: "white",
    fontWeight: "100",
  },
  subHeading: {
    fontSize: 20,
    color: "white",
  },
  rightAlign: {
    marginTop: 5,
    textAlign: "right",
    alignItems: "flex-end",
    marginLeft: 75,
  },
  feels: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  latLong: {
    fontSize: 18,
    color: "white",
  },
  weatherItemContainer: {
    flexDirection: "row",
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  weatherItem: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 17,
  },
  weatherItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
  weatherItemValue: {
    color: "white",
    fontSize: 12,
    fontWeight: "100",
  },
});

export default dateTime;
