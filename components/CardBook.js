import { StyleSheet, View, Text, Image, TouchableOpacity  } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getReadBook } from '../reducers/books';


const CardBook = ({getTitle, getDescription, getCouverture, isReading, updateSetBookLiked }) => {
    const [lilDescription, setLilDescription] = useState(null);
    const [isRead, setIsRead] = useState(isReading);

    useEffect(() => {
                let reduceDesc = getDescription.slice(0, 75) + ' ...'
                setLilDescription(reduceDesc)
        }
    , []) 

  return (
    <View
      style={{ flexDirection: "row", margin: 15, backgroundColor: "black" }}
    >   
      <Image
        source={{ uri: `${getCouverture}` }}
        style={{ width: 100, height: 'auto', marginRight: 10 }}
      />
      <View style={{ flexDirection: "column", marginBottom: 10, marginTop: 10 }}>
        <View style={{flexDirection: 'row', width: 200, marginBottom: 5}}>
        <TouchableOpacity
      onPress={() => {console.log(getTitle, isRead), setIsRead(!isRead), updateSetBookLiked({isReading: !isRead, title: getTitle, couverture: getCouverture, description: getDescription})}}
      style={[isRead === true ? styles.buttonClicked : styles.button]}
      >
      <FontAwesome name={"bookmark-o"} size={14} color={'#574DFF'} />
    </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white",marginLeft: 10 }}>
            {getTitle}
        </Text>
        </View>
        <View style={{width: 200, height: 'auto'}}>
        <Text style={{ fontWeight: "regular", fontSize: 13, color: "white" }}>
          {lilDescription}
        </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20,
    },
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


export default CardBook;

