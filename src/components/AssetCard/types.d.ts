import { TouchableOpacityProps } from "react-native";
import { IEquipment } from "../../services/dtos/IEquipment";

export type Data = {
  id: number;
};

export type AssetCardNavigationProps = {
  navigate(screen: string, data: Data): void;
};

export interface AssetCardProps extends TouchableOpacityProps {
  item: IEquipment;
};
