import Cabecalho from "@comp/Cabecalho";
import { Conteiner, Conteudo, Icone } from "./estilos";
import Destaque from "@comp/Destaque";
import Botao from "@comp/Botao";
import Entrada from "@comp/Entrada";

export default function NovoGrupo() {
	return (
		<Conteiner>
			<Cabecalho mostrarBotaoVoltar />
			<Conteudo>
				<Icone />
				<Destaque titulo="Nova turma" subtitulo="crie a turma para adicionar pessoas" />
				<Entrada placeholder="Nome da turma" />
				<Botao titulo="Criar" style={{ marginTop: 20 }} />
			</Conteudo>
		</Conteiner>
	);
}
