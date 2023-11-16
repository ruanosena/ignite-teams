import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type BotaoIconeTipoEstiloProps = "PRIMARIO" | "SECUNDARIO";

type BotaoIconeProps = {
	tipo: BotaoIconeTipoEstiloProps;
};

export const Conteiner = styled(TouchableOpacity)`
	width: 56px;
	height: 56px;
	justify-content: center;
	align-items: center;
	margin-left: 12px;
`;

export const Icone = styled(MaterialIcons).attrs<BotaoIconeProps>(({theme, tipo}) => ({
  size: 24,
  color: tipo == "PRIMARIO" ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;
