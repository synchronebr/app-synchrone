import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { AssetDetailsCard } from "../../components/AssetDetailsCard";
import { MeasurementPointCard } from "../../components/MeasurementPointCard";

import {
  Container,
  Header,
  Image,
  Asset,
  Title,
  Subtitle,
  Content,
  Text,
  MeasurementPoints,
} from "./styles";

export function AssetDetails() {
  const navigation = useNavigation();

  const THEME = useTheme();

  return (
    <Container>
      <Header>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/asset-image.png")}
        />

        <Entypo
          color={THEME.colors.light}
          name="chevron-left"
          onPress={() => navigation.goBack()}
          size={32}
          style={{
            position: "absolute",
            left: 8,
            top: 16,
          }}
        />

        <Asset>
          <Title>Motor Bomba Calderaria 2</Title>
          <Subtitle>MEBC2</Subtitle>
        </Asset>
      </Header>

      <Content>
        <Text>Detalhes do Ativo</Text>

        <AssetDetailsCard />

        <Text>Pontos de medição</Text>

        <MeasurementPoints>
          <MeasurementPointCard />
          <MeasurementPointCard />
          <MeasurementPointCard />
          <MeasurementPointCard />
          <MeasurementPointCard />
        </MeasurementPoints>
      </Content>
    </Container>
  );
}