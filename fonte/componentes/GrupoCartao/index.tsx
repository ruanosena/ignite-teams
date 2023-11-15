import { TouchableOpacityProps } from "react-native";
import { Conteiner, Icone, Titulo } from "./estilos";

type GrupoCartaoProps = TouchableOpacityProps & {
	titulo: string;
};

export default function GrupoCartao({ titulo, ...rest }: GrupoCartaoProps) {
	return (
		<Conteiner {...rest}>
			<Icone />
			<Titulo>{titulo}</Titulo>
		</Conteiner>
	);
}
