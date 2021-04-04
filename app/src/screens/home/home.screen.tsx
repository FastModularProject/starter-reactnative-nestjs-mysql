import { Text, View } from "react-native";
import styled from "styled-components";
import React from 'react';
import { Button } from "../../components/forms/button.component";
import { useNavigation } from "@react-navigation/native";
import colors from "../../themes/colors.theme";
import AppText from "../../components/style/app-text.component";

const Container = styled(View)` 
    background-color: ${colors.dark};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function HomeScreen() {
    const navigation = useNavigation();

    const goToSignin = () => {
        navigation.navigate("SigninScreen");
    }

    const goToSignup = () => {
        navigation.navigate("SignupScreen");
    }

    return <Container>
        <AppText h1 style={{ marginBottom: 15 }}>
            Mobile starter
        </AppText>
        <View style={{ display: "flex", flexDirection: "row", width: 270 }}>
            <Button
                style={{
                    marginRight: 10,
                    width: 130
                }}
                onPress={() => goToSignin()}
                text={"Signin"}
            />
            <Button
                style={{
                    width: 130
                }}
                onPress={() => goToSignup()}
                text={"Signup"}
            />
        </View>
    </Container>
}