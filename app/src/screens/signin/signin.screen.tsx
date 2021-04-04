import { Text, View } from "react-native";
import React from 'react';
import styled from "styled-components";
import colors from "../../themes/colors.theme";
import AppText from "../../components/style/app-text.component";
import { Button } from "../../components/forms/button.component";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/forms/text.input";
import { validateEmail } from "../../utils/regex.util";
import { signin } from "../../services/auth.service";
import { login } from "../../utils/auth.utils";


const Container = styled(View)` 
    background-color: ${colors.dark};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function SigninScreen() {
    const [loading, setLoading] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [error, setErrorMsg] = React.useState(null);
    const navigation = useNavigation();

    const goToSignup = () => {
        navigation.navigate("SignupScreen");
    }

    const submit = async () => {
        if (!validateEmail(email)) {
            setErrorMsg("Credentials incorrect");
            return;
        }

        setLoading(true);
        const res = await signin(email, password);
        setLoading(false);

        if (res.statusCode === 200) {
            login(res.data.token);
            navigation.navigate("ConnectedScreen");
        } else {
            setErrorMsg("Credentials incorrect");
        }
    }

    return <Container>
        <AppText h1 style={{ marginBottom: 30 }}>
            Signin
        </AppText>
        <TextInput
            onChangeText={(text) => setEmail(text)}
            style={{
                width: 250,
                marginBottom: 10
            }}
            placeholder="Email"
        />
        <TextInput
            onChangeText={(text) => setPassword(text)}
            style={{
                width: 250,
                marginBottom: 20
            }}
            password
            placeholder="Password"
            error={error}
        />
        <Button
            style={{
                marginBottom: 10,
                width: 250
            }}
            loading={loading}
            onPress={() => submit()}
            text={"Signin"}
        />
        <Button
            style={{
                width: 250
            }}
            color="transparant"
            onPress={() => goToSignup()}
            text={"Signup"}
        />
    </Container>
}