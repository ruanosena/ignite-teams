import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type FiltroEstiloProps = {
	estaAtivo?: boolean;
};

export const Conteiner = styled(TouchableOpacity)<FiltroEstiloProps>`
	${({ theme, estaAtivo }) =>
		estaAtivo &&
		css`
			border: 1px solid ${theme.COLORS.GREEN_700};
		`}
	border-radius: 4px;
	margin-right: 12px;
	height: 38px;
	width: 70px;
	align-items: center;
	justify-content: center;
`;

export const Titulo = styled.Text`
  text-transform: uppercase;
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.WHITE};
	`}
`;
