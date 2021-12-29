import React from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EasingAnim({ navigation }) {
    let opacity = new Animated.Value(0);

    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing,
            useNativeDriver: false
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80]
    });

    const animatedStyles = [
        styles.box,
        {
            opacity,
            width: size,
            height: size
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Animated.View style={animatedStyles} />
            </View>
            <SectionList
                style={styles.list}
                sections={SECTIONS}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => animate(item.easing)}
                        style={styles.listRow}
                    >
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.listHeader}>{title}</Text>
                )}
            />
        </View>
    );
};

const SECTIONS = [
    {
        title: "Predefined animations",
        data: [
            { title: "Bounce", easing: Easing.bounce },
            { title: "Ease", easing: Easing.ease },
            { title: "Elastic", easing: Easing.elastic(4) }
        ]
    },
    {
        title: "Standard functions",
        data: [
            { title: "Linear", easing: Easing.linear },
            { title: "Quad", easing: Easing.quad },
            { title: "Cubic", easing: Easing.cubic }
        ]
    },
    {
        title: "Additional functions",
        data: [
            {
                title: "Bezier",
                easing: Easing.bezier(0, 2, 1, -1)
            },
            { title: "Circle", easing: Easing.circle },
            { title: "Sin", easing: Easing.sin },
            { title: "Exp", easing: Easing.exp }
        ]
    },
    {
        title: "Combinations",
        data: [
            {
                title: "In + Bounce",
                easing: Easing.in(Easing.bounce)
            },
            {
                title: "Out + Exp",
                easing: Easing.out(Easing.exp)
            },
            {
                title: "InOut + Elastic",
                easing: Easing.inOut(Easing.elastic(1))
            }
        ]
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        marginTop: 10,
        textAlign: "center",
        color: "#61dafb"
    },
    boxContainer: {
        height: 160,
        alignItems: "center",
        backgroundColor: '#272727',
        margin: 10,
        borderRadius: 20
    },
    box: {
        marginTop: 32,
        borderRadius: 4,
        backgroundColor: "#61dafb"
    },
    list: {
        backgroundColor: "#fff",
        marginTop: 10,
    },
    listHeader: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'white',
        color: "#272727",
        fontSize: 16,
        fontWeight: 'bold'
    },
    listRow: {
        paddingHorizontal: 30,
        backgroundColor: '#272727',
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

