import React from "react";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import WhatsAppIcon from "../../assets/icons/whatsapp.svg";
import ArrowForwardIcon from "../../assets/icons/arrow-forward.svg";

import { WhatsAppButtonProps } from "./types";
import { Container, Content, Title, Subtitle } from "./styles";

export function WhatsAppButton({ ...rest }: WhatsAppButtonProps) {
  const THEME = useTheme();

  return (
    <Container {...rest}>
      <WhatsAppIcon height={RFValue(28)} width={RFValue(28)} />

      <Content>
        <Title>Precisa de ajuda?</Title>

        <Subtitle>Seguir para WhatsApp</Subtitle>
      </Content>

      <ArrowForwardIcon
        style={{ marginRight: 4 }}
        fill={THEME.colors.primary}
        height={RFValue(15)}
        width={RFValue(15)}
      />
    </Container>
  );
}