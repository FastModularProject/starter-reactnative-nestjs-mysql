import * as React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home/home.screen";
import SigninScreen from "./signin/signin.screen";
import SignupScreen from "./signup/signup.screen";
import ConnectedScreen from "./connected/connected.screen";
import { useLogin } from "../utils/auth.utils";

const Stack = createStackNavigator();

export default function ScreensNavigator() {
    const { isLogin } = useLogin();

    let initialRouteName = "HomeScreen";
    if (isLogin) initialRouteName = "ConnectedScreen";

    return (
        <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ConnectedScreen" component={ConnectedScreen} />
            <Stack.Screen name="SigninScreen" component={SigninScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    );
}
