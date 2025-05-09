import { TouchableOpacityProps } from "react-native";

export type MeasurementPointCardNavigationProps = {
  navigate(screen: string, { mesuringPointId: number, equipmentId: number }): void;
};

export type MeasurementPointCardProps = TouchableOpacityProps;
