import Cabecalho from "@comp/Cabecalho";
import { Conteiner } from "./estilos";
import Destaque from "@comp/Destaque";
import GrupoCartao from "@comp/GrupoCartao";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import ListaVazia from "@comp/ListaVazia";
import Botao from "@comp/Botao";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import obterGrupos from "@arm/grupo/obterGrupos";

export default function Grupos() {
	const [grupos, defGrupos] = useState<string[]>([]);
	const navegacao = useNavigation();

	function lidarNovoGrupo() {
		navegacao.navigate("novo");
	}

	async function buscarGrupos() {
		try {
			const dados = await obterGrupos();
			defGrupos(dados);
		} catch (erro) {
			console.log(erro);
		}
	}

	function lidarAbrirGrupo(grupo: string) {
		navegacao.navigate("participantes", { grupo });
	}

	useFocusEffect(
		useCallback(() => {
			buscarGrupos();
		}, [])
	);

	return (
		<Conteiner>
			<Cabecalho />
			<Destaque titulo="Turmas" subtitulo="Jogue com a sua turma" />
			<FlatList
				data={grupos}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<GrupoCartao titulo={item} onPress={() => lidarAbrirGrupo(item)} />
				)}
				ListEmptyComponent={<ListaVazia mensagem="Que tal cadastrar a primeira turma?" />}
				contentContainerStyle={grupos.length == 0 && { flex: 1 }}
			/>
			<Botao titulo="Criar nova turma" onPress={lidarNovoGrupo} />
		</Conteiner>
	);
}
