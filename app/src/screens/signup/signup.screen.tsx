import { Text, View } from "react-native";
import React from 'react';
import styled from "styled-components";
import colors from "../../themes/colors.theme";
import AppText from "../../components/style/app-text.component";
import { Button } from "../../components/forms/button.component";
import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/forms/text.input";
import { validateEmail } from "../../utils/regex.util";
import { signin, signup } from "../../services/auth.service";
import { login } from "../../utils/auth.utils";


const Container = styled(View)` 
    background-color: ${colors.dark};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function SignupScreen() {
    const [pseudo, setPseudo] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = React.useState(null);
    const [error, setErrorMsg] = React.useState("");
    const navigation = useNavigation();

    const goToSignin = () => {
        navigation.navigate("SigninScreen");
    }

    const submit = async () => {
        setErrorMsg("");
        if (!email || !password || !pseudo || !passwordConfirmation) {
            setErrorMsg("All fields are mandatory");
            return;
        }
        if (password != passwordConfirmation) {
            setErrorMsg("Passwords are not the same");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg("Email invalid");
            return;
        }

        setLoading(true);
        const res = await signup({
            email,
            password,
            pseudo
        });

        if (res.statusCode === 200) {
            if (res.data.success) {
                const res = await signin(email, password);
                if (res.data.token) {
                    login(res.data.token);
                    navigation.navigate("ConnectedScreen");
                }
            } else {
                setErrorMsg("Email already use");
            }
        }
        setLoading(false);
    }

    return <Container>
        <AppText h1 style={{ marginBottom: 30 }}>
            Signin
        </AppText>
        <TextInput
            onChangeText={(text) => setPseudo(text)}
            style={{
                width: 250,
                marginBottom: 10
            }}
            placeholder="Pseudo"
        />
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
                marginBottom: 10
            }}
            password
            placeholder="Password"
        />
        <TextInput
            onChangeText={(text) => setPasswordConfirmation(text)}
            style={{
                width: 250,
                marginBottom: 20
            }}
            password
            placeholder="Password confirmation"
            error={error}
        />
        <Button
            style={{
                marginBottom: 10,
                width: 250
            }}
            loading={loading}
            onPress={() => submit()}
            text={"Signup"}
        />
        <Button
            style={{
                width: 250
            }}
            color="transparant"
            onPress={() => goToSignin()}
            text={"Signin"}
        />
    </Container>
}