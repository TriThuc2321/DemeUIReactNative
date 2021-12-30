import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const PercentageDimension = ()=>{
    return (
        <View style={{ height: '100%' }}>
          <View style={{
            height: '25%', backgroundColor: 'red'
          }} >
              <Text>Height 25%</Text>
          </View>

          <View style={{
            width: '50%', height: '25%', backgroundColor: 'blue'
          }} >
              <Text>Height: 25% - Width: 50%</Text>
          </View>

          <View style={{
            width: '75%', height: '50%', backgroundColor: 'green'
          }} >
              <Text>Height: 75% - Width: 50%</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: 'white',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

export default PercentageDimension;