import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 12px;
  flex-direction: row;
  gap: 12px;
  padding: 8px 16px;
`;

export const Image = styled.Image`
  border-radius: 8px;
  height: ${RFValue(78)}px;
  width: ${RFValue(102)}px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 2px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  line-height: 21px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smallest}px;
  line-height: 15px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smallest}px;
  line-height: 21px;
`;

export const LastMeasurementInfo = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LastMeasurementTextInfo = styled.Text`
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 128px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smallest}px;
  line-height: 15px;
  margin-bottom: 6px;
  padding: 4px;
`;