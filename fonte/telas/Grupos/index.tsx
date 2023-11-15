import Cabecalho from "@comp/Cabecalho";
import { Conteiner } from "./estilos";
import Destaque from "@comp/Destaque";
import GrupoCartao from "@comp/GrupoCartao";

export default function Grupos() {
	return (
		<Conteiner>
			<Cabecalho />
			<Destaque titulo="Turmas" subtitulo="Jogue com a sua turma" />

			<GrupoCartao titulo="Galera do Ignite" />
		</Conteiner>
	);
}
