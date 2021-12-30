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
import TabsStack from './tabsStack';

import StyleScreen from '../screens/StyleScreen'
import FixedDimension from '../screens/FixedDimension';
import FlexDimension from '../screens/FlexDimension';
import PercentageDimension from '../screens/PercentageDimension'
import JustifyContent from '../screens/JustifyContent'
import Flex from '../screens/Flex'
import FlexDirection from '../screens/FlexDirection'


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
                <Stack.Screen name="TabsStack" component={TabsStack} options={{ headerShown: false }} />

                <Stack.Screen name="StyleScreen" component={StyleScreen} />

                <Stack.Screen name="FixedDimension" component={FixedDimension} />
                <Stack.Screen name="FlexDimension" component={FlexDimension} />
                <Stack.Screen name="PercentageDimension" component={PercentageDimension} />

                <Stack.Screen name="Flex" component={Flex} />
                <Stack.Screen name="FlexDirection" component={FlexDirection} />
                <Stack.Screen name="JustifyContent" component={JustifyContent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
