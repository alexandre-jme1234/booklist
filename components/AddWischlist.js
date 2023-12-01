import { StyleSheet, TouchableOpacity, Text, View  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import CardBook from "./CardBook";

const AddWischlist = () => {

  const [isClicked, setIsClicked] = useState(false);

  const addWischlist = () => {
      setIsClicked(!isClicked)
  }
  return (
    <View >
    <TouchableOpacity
      onPress={() => {addWischlist()}}
      style={[isClicked === true ? styles.buttonClicked : styles.button]}
    >
      <FontAwesome name={"bookmark-o"} size={14} color={'#574DFF'} />
    </TouchableOpacity>
    </View>
);
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 4,
      borderWidth: 3,
      borderColor: '#574DFF'
    },
    buttonClicked: {
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 4,
      borderWidth: 3,
      borderColor: '#574DFF'
    },
});


  export default AddWischlist;