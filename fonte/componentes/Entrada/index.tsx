import { TextInputProps } from "react-native";
import { Conteiner } from "./estilos";
import { useTheme } from "styled-components/native";

export default function Entrada({ ...rest }: TextInputProps) {
	const { COLORS } = useTheme();

	return <Conteiner placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
