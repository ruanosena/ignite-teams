import BotaoIcone from "@comp/BotaoIcone";
import { Conteiner, Icone, Nome } from "./estilos";

type ParticipanteCartaoProps = {
	nome: string;
  aoRemover: () => void;
};

export default function ParticipanteCartao({ nome, aoRemover }: ParticipanteCartaoProps) {
	return (
		<Conteiner>
			<Icone name="person" />
			<Nome>{nome}</Nome>
      <BotaoIcone icone="close" tipo="SECUNDARIO" onPress={aoRemover} />
		</Conteiner>
	);
}
