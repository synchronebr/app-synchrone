import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.gray_dark};
  border-radius: 12px;
  border-width: 1px;
  flex-direction: row;
  gap: 12px;
  padding: 8px 16px;
`;

export const Image = styled.Image`
  border-radius: 8px;
  height: 108px;
  width: 108px;
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

export const LastMeasurementText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.smallest}px;
  line-height: 15px;
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

export const Elipses = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DangerElipse = styled.View`
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 64px;
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
`;

export const WarningElipse = styled.View`
  background-color: ${({ theme }) => theme.colors.warning};
  border-radius: 64px;
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
`;

export const SuccessElipse = styled.View`
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 64px;
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
`;