import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const FlexDimension = ()=>{
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'maroon' }} >
              <Text style = {{
                fontSize: 20,
                fontWeight:'bold',
                color: 'white',
                textAlign: 'center'
              }}>flex: 1</Text>
          </View>

          <View style={{ flex: 2, backgroundColor: 'gray' }} >
          <Text style = {{
                fontSize: 20,
                fontWeight:'bold',
                color: 'black',
                textAlign: 'center'
              }}>flex: 2</Text>
          </View>

          <View style={{ flex: 3, backgroundColor: 'green' }} >
          <Text style = {{
                fontSize: 20,
                fontWeight:'bold',
                color: 'white', 
                textAlign:'center',
              }}>flex: 3</Text>
          </View>
        </View>
      );
}

export default FlexDimension;