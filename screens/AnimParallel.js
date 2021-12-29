import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Image, Easing, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';


export default function AnimParallel() {

    const animatedValue1 = useRef(new Animated.Value(0)).current
    const animatedValue2 = useRef(new Animated.Value(0)).current


    const animate = () => {
        Animated.parallel([
            createAnimation(animatedValue1, 2000, Easing.ease),
            createAnimation(animatedValue2, 1000, Easing.ease, 1000),
        ]).start()
    }
    const createAnimation = (value, duration, easing, delay = 0) => {
        return Animated.timing(
            value,
            {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver: true
            }
        )
    }

    const scaleText = animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 2]
    })
    const spinText = animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Animated.View
                style={{ transform: [{ scale: scaleText }] }}>
                <Text>Welcome</Text>
            </Animated.View>
            <Animated.View
                style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
                <Text
                    style={{ fontSize: 20 }}>
                    to the App!
                </Text>
            </Animated.View>


            <TouchableOpacity style={styles.button} onPress={animate}>
                <Text style={styles.text}>Animation Parallel</Text>
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