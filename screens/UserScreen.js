import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function UserScreen() {
    const insets = useSafeAreaInsets();



    return (
            <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#010012' }}>
                <Text style={{color: 'white'}}>Hello User</Text>
            </View>
    )
}

const styles = StyleSheet.create({

})