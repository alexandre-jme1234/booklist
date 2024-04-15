// import { StyleSheet, TouchableOpacity, Text, View  } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getReadBook } from '../reducers/books';

// const AddWischlist = ({isReading}) => {
  
//   const books = useSelector((state) => state.book.value);
//   const dispatch = useDispatch();

//   const [isClicked, setIsClicked] = useState(false);
//   // console.log('isReading add', isReading)

//   const addWischlist = () => {
//     const bookIdToUpdate = 1;
//     const updatedBooks = books.title.map((data) => {
//       if (data.id === bookIdToUpdate) {
//         return { ...data, isReading: true };
//       }
//       return data;
//     });
//     dispatch(getReadBook(updatedBooks));
//     setIsClicked(!isClicked);
//     console.log('updatedBooks', updatedBooks);
//   };

//   return (
//     <View >
//     <TouchableOpacity
//       onPress={() => {addWischlist()}}
//       style={[isClicked === true ? styles.buttonClicked : styles.button]}
//     >
//       <FontAwesome name={"bookmark-o"} size={14} color={'#574DFF'} />
//     </TouchableOpacity>
//     </View>
// );
//   };

//   const styles = StyleSheet.create({
//     button: {
//       height: 10,
//       alignItems: 'center',
//       backgroundColor: 'black',
//       padding: 10,
//       borderRadius: 4,
//       borderWidth: 3,
//       borderColor: '#574DFF',
//     },
//     buttonClicked: {
//       height: 10,
//       alignItems: 'center',
//       backgroundColor: 'white',
//       padding: 10,
//       borderRadius: 4,
//       borderWidth: 3,
//       borderColor: '#574DFF',
//     },
// });


//   export default AddWischlist;