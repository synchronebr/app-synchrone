import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: RFValue(20),
  },
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(48)}px;
  margin: ${RFValue(96)}px 0;
  text-align: center;
`;

export const Form = styled.View`
  margin-bottom: 16px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 8px;
`;