import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ThemeProvider } from "styled-components/native";

import THEME from "./src/global/styles/theme";

import { Routes } from "./src/routes";

export default function App() {
  NavigationBar.setBackgroundColorAsync(THEME.colors.primary);

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.primary} barStyle="default" />
      <Routes />
    </ThemeProvider>
  );
}