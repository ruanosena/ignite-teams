import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type BotaoTipoEstiloProps = "PRIMARIO" | "SECUNDARIO";

type BotaoProps = {
	tipo: BotaoTipoEstiloProps;
};

export const Conteiner = styled(TouchableOpacity)<BotaoProps>`
	flex: 1;
	min-height: 56px;
	max-height: 56px;
	background-color: ${({ theme, tipo }) =>
		tipo == "PRIMARIO" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
	border-radius: 6px;
	justify-content: center;
	align-items: center;
`;

export const Titulo = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.WHITE};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;
