import {API_KEY} from '@env';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import CardBook from "../components/CardBook";

export default function HomeScreen(props) { 
    const [bookData, setBookData] = useState(null);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        
            fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:tesson&key=${API_KEY}`)
              .then((response) => response.json())
              .then(data => {
                if(data !== null) {
                    const getBook = data.items.map((title) => ({
                        title: title.volumeInfo.title,
                        description: title.volumeInfo.description,
                        couverture: title.volumeInfo.imageLinks.smallThumbnail
                    }));
                    setBookData(getBook);
                } else {
                    console.log('error')
                }
            })
            .catch(error => {console.log('error', error);})
        }, [])
        return (
            <ScrollView>
            <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#010012'}}>
                    {bookData && bookData.map((data, i) => (<CardBook key={i} getTitle={data.title} getDescription={data.description} getCouverture={data.couverture}/>)) }
            </View>
            </ScrollView>
        )
    }

const styles = StyleSheet.create({

})