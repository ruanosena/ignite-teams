import { TouchableOpacityProps } from "react-native";
import { Conteiner, FiltroEstiloProps, Titulo } from "./estilos";

type FiltroProps = TouchableOpacityProps &
	FiltroEstiloProps & {
		titulo: string;
	};

export default function Filtro({ titulo, estaAtivo, ...rest }: FiltroProps) {
	return (
		<Conteiner estaAtivo={estaAtivo} {...rest}>
			<Titulo>{titulo}</Titulo>
		</Conteiner>
	);
}
