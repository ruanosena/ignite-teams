import { TouchableOpacityProps } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { BotaoIconeTipoEstiloProps, Conteiner, Icone } from "./estilos";

type BotaoIconeProps = TouchableOpacityProps & {
	icone: keyof typeof MaterialIcons.glyphMap;
	tipo?: BotaoIconeTipoEstiloProps;
};

export default function BotaoIcone({ icone, tipo = "PRIMARIO", ...rest }: BotaoIconeProps) {
	return (
		<Conteiner {...rest}>
			<Icone name={icone} tipo={tipo} />
		</Conteiner>
	);
}
