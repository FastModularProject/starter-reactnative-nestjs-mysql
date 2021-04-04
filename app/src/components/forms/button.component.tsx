import React from "react";
import styled from "styled-components";
import {
    ActivityIndicator
} from "react-native";
import colors from "../../themes/colors.theme";
import AppText from "../style/app-text.component";
import { TouchableOpacity } from "react-native-gesture-handler";


export const ButtonContainer = styled(TouchableOpacity)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    ${props => props?.color ?
        props.color != "transparant" && `background-color: ${colors[props.color]};`
        :
        `background-color: ${colors.primary};`
    }
    border: none;
    height: 35px;
    width: 100%;
`;

type ButtonProps = {
    loading?: boolean,
    onPress: () => void,
    style?: any,
    text: string,
    color?: string
};

export const Button = (props: ButtonProps) => {


    return <ButtonContainer style={props?.style} onPress={props.onPress} color={props?.color}>
        {
            Boolean(props?.loading) ?
                <ActivityIndicator size="small" color="white" />
                :
                <AppText>
                    {props?.text}
                </AppText>
        }
    </ButtonContainer >
}