import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';


interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
   width: 48%;
   flex-direction: row;
   justify-content: center;
   align-items: center;

   border: 1.5px solid ${({ theme }) => theme.colors.text};

   border-radius: 5px;

   padding: 16px;
`;

export const Icon = styled(Feather) <IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) =>
        type === 'up' ? theme.colors.success : theme.colors.attention};
`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
