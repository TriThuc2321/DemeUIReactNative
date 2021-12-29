import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true
            }

        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function DemoAnim({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            {/* <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
                <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
            </FadeInView> */}
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('AnimTiming') }}>
                <Text style={styles.text}>Animation Timing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('AnimParallel') }}>
                <Text style={styles.text}>Animation Parallel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('EasingAnim') }}>
                <Text style={styles.text}>Easing Animation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SplashScreen') }}>
                <Text style={styles.text}>Splash Screen</Text>
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
        width: 250,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
});