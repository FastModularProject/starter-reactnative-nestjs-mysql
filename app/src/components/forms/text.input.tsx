import React from "react";
import {
    TextInput,
    View
} from "react-native";
import styled from "styled-components";
import colors from "../../themes/colors.theme";
import AppText from "../style/app-text.component";

const TextInputStyled = styled(TextInput) <any>`
    background-color: white;
    border-radius: 10px;
	padding: 4px 16px;
`;

const Container = styled(View)`
    position: relative;
    width: 100%;
`;

const ErrorText = styled(AppText)` 
    position: absolute;
    z-index: 10;
    bottom: -20px;
`;

type TextInputProps = {
    error?: string,
    style?: any,
    noAutoFocus?: boolean,
    placeholder?: string,
    password?: boolean,
    onChangeText: (text: string) => void
};

export default function AppTextInput(props: TextInputProps) {
    return (
        <Container style={props?.style}>
            <TextInputStyled
                onChangeText={props.onChangeText}
                secureTextEntry={props?.password}
                placeholder={props.placeholder}
                placeholderTextColor={colors.dark}
            />
            {Boolean(props?.error) &&
                <ErrorText color={"danger"} small>
                    {props?.error}
                </ErrorText>
            }
        </Container>
    );
}
