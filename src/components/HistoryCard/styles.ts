import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { HistoryCardCircleStyleProps, HistoryCardStyleProps } from "./types";

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Progress = styled.View`
  align-items: center;
  gap: 4px;
`;

export const Circle = styled.View<HistoryCardCircleStyleProps>`
  background-color: ${({ isLastCard, theme }) =>
    isLastCard ? theme.colors.secondary : null};
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 64px;
  border-width: 2px;
  height: ${RFValue(12)}px;
  width: ${RFValue(12)}px;
`;

export const Line = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  width: 1px;
`;

export const Card = styled.View<HistoryCardStyleProps>`
  background-color: ${({ type, theme }) =>
    type === "danger"
      ? theme.colors.danger
      : type === "success"
      ? theme.colors.success
      : type === "warning"
      ? theme.colors.warning
      : theme.colors.success};
  border-radius: 8px;
  flex: 1;
  padding: 12px 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  line-height: 21px;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  line-height: 24px;
`;

export const Content = styled.View``;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.smaller}px;
  line-height: 18px;
`;