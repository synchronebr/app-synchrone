import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import THEME from "../../global/styles/theme";

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    backgroundColor: THEME.colors.light,
    minHeight: "100%",
    paddingHorizontal: RFValue(36),
  },
  keyboardShouldPersistTaps: "always",
})``;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const ConnectionButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 16px 0;
`;

export const Inputs = styled.View`
  gap: 8px;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.View``;

export const ButtonWrapper = styled.View`
  margin-bottom: 48px;
`;