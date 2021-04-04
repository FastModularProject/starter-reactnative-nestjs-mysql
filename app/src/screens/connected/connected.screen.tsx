import { Text, View } from "react-native";
import styled from "styled-components";
import React from 'react';
import { Button } from "../../components/forms/button.component";
import { useNavigation } from "@react-navigation/native";
import colors from "../../themes/colors.theme";
import AppText from "../../components/style/app-text.component";
import { logout, useLogin } from "../../utils/auth.utils";

const Container = styled(View)` 
    background-color: ${colors.dark};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ConnectedScreen() {
    const navigation = useNavigation();
    const { me } = useLogin();

    const disconnect = () => {
        logout();
        navigation.navigate("HomeScreen");
    }

    return <Container>
        <AppText h1 style={{ marginBottom: 10 }}>
            Connected
        </AppText>
        <AppText style={{ marginBottom: 10 }}>
            {me.pseudo}
        </AppText>
        <AppText style={{ marginBottom: 10 }}>
            {me.email}
        </AppText>
        <View style={{ display: "flex", flexDirection: "row", width: 260 }}>
            <Button
                style={{
                    marginRight: 10,
                    width: 260
                }}
                onPress={() => disconnect()}
                text={"Disconnect"}
            />
        </View>
    </Container>
}