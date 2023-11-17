import { useNavigation } from "@react-navigation/native";
import { IconeVoltar, Conteiner, Logotipo, BotaoVoltar } from "./estilos";
import logotipoImagem from "@esp/Logo.png";

type CabecalhoProps = {
	mostrarBotaoVoltar?: boolean;
};

export default function Cabecalho({ mostrarBotaoVoltar = false }: CabecalhoProps) {
	const navegacao = useNavigation();

	function lidarVoltar() {
		navegacao.navigate("grupos");
	}

	return (
		<Conteiner>
			{mostrarBotaoVoltar && (
				<BotaoVoltar onPress={lidarVoltar}>
					<IconeVoltar />
				</BotaoVoltar>
			)}
			<Logotipo source={logotipoImagem} />
		</Conteiner>
	);
}
