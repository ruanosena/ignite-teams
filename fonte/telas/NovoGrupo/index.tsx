import Cabecalho from "@comp/Cabecalho";
import { Conteiner, Conteudo, Icone } from "./estilos";
import Destaque from "@comp/Destaque";
import Botao from "@comp/Botao";
import Entrada from "@comp/Entrada";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import criarGrupo from "@arm/grupo/criarGrupo";
import { AppErro } from "@util/AppErro";
import { Alert } from "react-native";

export default function NovoGrupo() {
	const [grupo, defGrupo] = useState("");
	const navegacao = useNavigation();

	async function lidarNovo() {
		try {
			if (!grupo.trim()) {
				return Alert.alert("Novo grupo", "Informe o nome da turma.")
			}

			await criarGrupo(grupo);
			navegacao.navigate("participantes", { grupo });
		} catch (erro) {
			if (erro instanceof AppErro) {
				Alert.alert("Novo grupo", erro.mensagem);
			} else {
				Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
				console.log(erro);
			}
		}
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
