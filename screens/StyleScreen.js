import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const StyleScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold'
            }}>Hello</Text>

            <Text style={{
                color: 'blue',
                fontSize: 18,
                fontStyle: 'italic'
            }}>Hello</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 20,
        marginBottom: 10
    }
})
export default StyleScreen;