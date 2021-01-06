import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading.js";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      
      // Send to APi and get weather
      this.setState( { isLoading: false });
    } catch (error) {
      Alert.alert("Cant find you,", "So sad...");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
