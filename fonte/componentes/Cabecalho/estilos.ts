import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Conteiner = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Logotipo = styled.Image`
	width: 46px;
	height: 55px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
	flex: 1;
`;

export const IconeVoltar = styled(CaretLeft).attrs(({ theme }) => ({
	size: 32,
	color: theme.COLORS.WHITE,
}))``;
