import { StyleSheet, View, Text, Image  } from "react-native";
import React, { useEffect, useState } from "react";
import AddWischlist from '../components/AddWischlist.js';


const CardBook = ({getTitle, getDescription, getCouverture}) => {

    const [lilDescription, setLilDescription] = useState(null);

    console.log('title', getTitle)
    console.log('description ', getDescription)
    console.log('couverture', getCouverture)

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
        <AddWischlist />
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
});


export default CardBook;

