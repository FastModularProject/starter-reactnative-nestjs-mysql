import styled from "styled-components";
import colors from "../../themes/colors.theme";
import fonts from "../../themes/fonts.theme";
import {
    Text
} from "react-native";

type TextProps = {
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    color?: string;
}

const AppText = styled(Text) <TextProps>`
    color: ${colors.light};
    font-size: 20px;
    margin: 0px;
    
    ${props => props.color && `
        color: ${colors[props.color]};
    `}

    ${props => props.h1 && `
        font-size: 40px;
        font-weight: 700;
    `}
    
    ${props => props.h2 && `
        font-size: 30px;
        font-weight: 600;
    `}

    ${props => props.h3 && `
        font-size: 30px;
    `}

    ${props => props.small && `
        font-size: 15px;
    `}
`

export default AppText;