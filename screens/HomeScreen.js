import { API_KEY } from "@env";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import CardBook from "../components/CardBook";
import { useDispatch, useSelector } from "react-redux";
import { setTableReadBook } from "../reducers/books";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const [bookData, setBookData] = useState(null);
  const [isReadBook, setIsReadBook] = useState({id: Math.random(), book: null});
  const [tableReadBook, setTableReadBook] = useState([]);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:tesson&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          const getBook = data.items.map((title) => ({
            title: title.volumeInfo.title,
            description: title.volumeInfo.description,
            couverture: title.volumeInfo.imageLinks.smallThumbnail,
            isReading: false,
          }));
          setBookData(getBook);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const updateSetBookLiked = (e) => {
    setIsReadBook(e)
  

    if(tableReadBook.find(book => book.isReading === false)) {
      const filterReadBook = tableReadBook.filter(book => book.isReading !== false);
      dispatch((setTableReadBook(filterReadBook)))
    } else {
      dispatch(setTableReadBook([...tableReadBook, isReadBook]));
    }
    console.log('array books', tableReadBook)
  };

  // const listWischBook = tableReadBook.map((data, i) => {
  //   console.log('data', data.description)
  //   return  <View
  //       style={{height: '400px', width: '300px', backgroundColor: 'green'}}
  //     >
  //           <CardBook
  //             key={i}
  //             isReading={data.isReading}
  //             getTitle={data.title}
  //             getDescription={data.description}
  //             getCouverture={data.couverture}
  //             updateSetBookLiked={updateSetBookLiked}
  //           />
  //   </View>
  // })



  return (
    <ScrollView>
      <View
        style={{ flex: 1, paddingTop: insets.top, backgroundColor: "#010012" }}
      >
        {bookData &&
          bookData.map((data, i) => (
            <CardBook
              key={i}
              isReading={data.isReading}
              getTitle={data.title}
              getDescription={data.description}
              getCouverture={data.couverture}
              updateSetBookLiked={updateSetBookLiked}
            />
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ button: {
    height: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#574FFF',
  },
  buttonClicked: {
    height: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#574DFF',
  },});