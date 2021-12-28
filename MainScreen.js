import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>UI React Native</Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('DemoAnim') }}>
                <Text style={styles.text}>Animation</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#272727',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 60,
        margin: 10
    },
    text: {
        color: 'white'
    }
});