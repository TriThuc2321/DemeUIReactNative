import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const FixedDimension = () => {
    return (
    <View>
        <View style={{
            width: 100, height: 100, backgroundColor: 'powderblue'
        }} >
            <Text style={{
                padding: 5
            }}>width: 100, height: 100</Text>
        </View>

        <View style={{
            width: 200, height: 200, backgroundColor: 'skyblue'
        }} >
            <Text style={{
                padding: 5
            }}>width: 200, height: 200</Text>
        </View>

        <View style={{
            width: 300, height: 300, backgroundColor: 'steelblue'
        }} >
                <Text style={{
                padding: 5
            }}>width: 300, height: 300</Text>
        </View>
    </View>
    )
}

export default FixedDimension;