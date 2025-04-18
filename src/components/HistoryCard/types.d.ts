import { TouchableOpacityProps } from "react-native";

import { IDiagnose } from "../../services/dtos/IDiagnose";

export type HistoryCardNavigationProps = {
  navigate(screen: string, data: GetNotificationByIDResponse);
};

export type HistoryCardProps = TouchableOpacityProps & {
  isLastCard?: boolean;
  item: IDiagnose;
};

export type HistoryCardStyleProps = {
  type: Type;
};

export type HistoryCardCircleStyleProps = {
  isLastCard?: boolean;
  read?: boolean;
};

type Type = "S" | "D" | "W";
