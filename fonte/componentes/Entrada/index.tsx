import { TextInput, TextInputProps } from "react-native";
import { Conteiner } from "./estilos";
import { useTheme } from "styled-components/native";

type EntradaProps = TextInputProps & {
	entradaRef?: React.RefObject<TextInput>;
};

export default function Entrada({ entradaRef, ...rest }: EntradaProps) {
	const { COLORS } = useTheme();

	return <Conteiner ref={entradaRef} placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
