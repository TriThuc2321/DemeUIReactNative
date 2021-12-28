import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../MainScreen';
import DemoAnim from '../screens/DemoAnim';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DemoAnim" component={DemoAnim} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
