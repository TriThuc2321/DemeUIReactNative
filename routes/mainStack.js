import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../MainScreen';
import DemoAnim from '../screens/DemoAnim';
import AnimTiming from '../screens/AnimTiming';
import AnimParallel from '../screens/AnimParallel';
import DrawerStack from './drawerStack';
import EasingAnim from '../screens/EasingAnim';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DrawerStack" component={DrawerStack} options={{ headerShown: false }} />
                <Stack.Screen name="DemoAnim" component={DemoAnim} />
                <Stack.Screen name="AnimTiming" component={AnimTiming} />
                <Stack.Screen name="AnimParallel" component={AnimParallel} />
                <Stack.Screen name="EasingAnim" component={EasingAnim} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
