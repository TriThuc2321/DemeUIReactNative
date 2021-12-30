import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ ...styles.title, fontSize: 25, textAlign: 'center', padding: 20 }}>UI React Native</Text>

                <Text style={styles.title}>Style</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('StyleScreen') }}>
                    <Text style={styles.text}>Style</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Height - Width</Text>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('FixedDimension') }}>
                    <Text style={styles.text}>Fixed Dimension</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('FlexDimension') }}>
                    <Text style={styles.text}>Flex Dimension</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('PercentageDimension') }}>
                    <Text style={styles.text}>Percentage Dimension</Text>
                </TouchableOpacity>

                <Text style={styles.title}>FlexBox</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Flex') }}>
                    <Text style={styles.text}>Flex</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('FlexDirection') }}>
                    <Text style={styles.text}>Flex Direction</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('JustifyContent') }}>
                    <Text style={styles.text}>Justify Content</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Animation</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('DemoAnim') }}>
                    <Text style={styles.text}>Animation</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Navigators</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('DrawerStack') }}>
                    <Text style={styles.text}>Drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('TabsStack') }}>
                    <Text style={styles.text}>Tabs</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    button: {
        backgroundColor: '#272727',
        borderRadius: 15,
        paddingVertical: 10,
        width: 250,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    title: {
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'black'
    }

});