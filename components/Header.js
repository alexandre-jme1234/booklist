import { View, Text, Image } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={{ flexDirection: "row", margin: 15 }}>
      <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ width: 50, height: 50  }} />
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Header;