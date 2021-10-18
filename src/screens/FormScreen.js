import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Component,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const img = require("../img/weather.png");

export default function FormScreen({ navigation }) {
  const [nama, setNama] = useState("");
  const [selectedProv, setSelectedProv] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={styles.heading}>MyZi Weather</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nama Pengguna"
          placeholderTextColor="#6D8299"
          onChangeText={(nama) => setNama(nama)}
          value={nama}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={selectedProv}
          onValueChange={(itemValue) => setSelectedProv(itemValue)}
        >
          <Picker.Item label="Pilih Provinsi" />
          <Picker.Item label="Jawa Barat" value="Jawa Barat" />
          <Picker.Item label="Jawa Tengah" value="Jawa Tengah" />
          <Picker.Item label="Jawa Timur" value="Jawa Timur" />
          <Picker.Item label="DI Yogyakarta" value="DI Yogyakarta" />
          <Picker.Item label="Banten" value="Banten" />
        </Picker>
      </View>
      <View style={styles.inputView}>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
        >
          <Picker.Item label="Pilih Kota" />
          <Picker.Item label="Bogor" value="Bogor" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Sleman" value="Sleman" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Cirebon" value="Cirebon" />
          <Picker.Item label="Purwokerto" value="Purwokerto" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Serang" value="Serang" />
          <Picker.Item label="Ciamis" value="Ciamis" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() =>
          navigation.navigate("Weather Main Menu", {
            data: nama,
            selectedCity,
            selectedProv,
          })
        }
      >
        <Text style={styles.loginText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14274E",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputView: {
    width: 305,
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    marginTop: 15,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    marginLeft: 10,
    height: 50,
    color: "grey",
    alignItems: "center",
    fontSize: 16,
  },
  picker: {
    width: 290,
    height: 50,
    color: "grey",
  },
  image: {
    resizeMode: "contain",
    marginBottom: 10,
    height: 150,
    width: 150,
  },
  loginBtn: {
    width: 305,
    height: 40,
    backgroundColor: "#00909E",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 12.5,
  },
  loginText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#ffff",
  },
});
