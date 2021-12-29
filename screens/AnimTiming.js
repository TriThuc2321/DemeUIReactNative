import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, Image, Easing } from 'react-native';

const SpinImg = (props) => {
    const spinAnim = useRef(new Animated.Value(0)).current
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    React.useEffect(() => {
        Animated.timing(
            spinAnim,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true
            }

        ).start();
    }, [spinAnim])

    return (
        <Animated.Image
            style={{
                ...props.style,
                transform: [{ rotate: spin }]
            }}
            source={props.source}
        />

    );
}

export default function AnimTiming() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <SpinImg
                style={{ height: 200, width: 200, }}
                source={{
                    uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                }}
            />
        </View>
    )
}