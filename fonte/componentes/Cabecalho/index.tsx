import { IconeVoltar, Conteiner, Logotipo, BotaoVoltar } from "./estilos";
import logotipoImagem from "@esp/Logo.png";

type CabecalhoProps = {
	mostrarBotaoVoltar?: boolean;
};

export default function Cabecalho({ mostrarBotaoVoltar = false }: CabecalhoProps) {
	return (
		<Conteiner>
			{mostrarBotaoVoltar && (
				<BotaoVoltar>
					<IconeVoltar />
				</BotaoVoltar>
			)}
			<Logotipo source={logotipoImagem} />
		</Conteiner>
	);
}
