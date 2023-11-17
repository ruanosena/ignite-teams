import Cabecalho from "@comp/Cabecalho";
import { Conteiner, Conteudo, Icone } from "./estilos";
import Destaque from "@comp/Destaque";
import Botao from "@comp/Botao";
import Entrada from "@comp/Entrada";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function NovoGrupo() {
	const navegacao = useNavigation();
	const [grupo, defGrupo] = useState("");

	function lidarNovo() {
		navegacao.navigate("participantes", { grupo });
	}

	return (
		<Conteiner>
			<Cabecalho mostrarBotaoVoltar />
			<Conteudo>
				<Icone />
				<Destaque titulo="Nova turma" subtitulo="crie a turma para adicionar pessoas" />
				<Entrada placeholder="Nome da turma" onChangeText={defGrupo} value={grupo} />
				<Botao titulo="Criar" style={{ marginTop: 20 }} onPress={lidarNovo} />
			</Conteudo>
		</Conteiner>
	);
}
