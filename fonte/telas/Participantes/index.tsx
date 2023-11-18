import Cabecalho from "@comp/Cabecalho";
import { CabecalhoLista, Conteiner, Form, NumeroDeParticipantes } from "./estilos";
import Destaque from "@comp/Destaque";
import BotaoIcone from "@comp/BotaoIcone";
import Entrada from "@comp/Entrada";
import Filtro from "@comp/Filtro";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useState, useRef } from "react";
import ParticipanteCartao from "@comp/ParticipanteCartao";
import ListaVazia from "@comp/ListaVazia";
import Botao from "@comp/Botao";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ParticipanteArmDTO } from "@arm/participante/ParticipanteArmDTO";
import { AppErro } from "@util/AppErro";
import addParticipantePorGrupo from "@arm/participante/addParticipantePorGrupo";
import obterParticipantesPorGrupoETime from "@arm/participante/obterParticipantesPorGrupoETime";
import removerParticipantePorGrupo from "@arm/participante/removerParticipantePorGrupo";
import removerGrupoPorNome from "@arm/grupo/removerGrupoPorNome";

type RotaParams = {
	grupo: string;
};

export default function Participantes() {
	const [novoParticipanteNome, defNovoParticipanteNome] = useState<string>("");
	const [time, defTime] = useState<string>("Time A");
	const [participantes, defParticipantes] = useState<ParticipanteArmDTO[]>([]);
	const novoParticipanteNomeEntradaRef = useRef<TextInput>(null);
	const navegacao = useNavigation();

	const rota = useRoute();
	const { grupo } = rota.params as RotaParams;

	async function lidarAddParticipante() {
		if (!novoParticipanteNome.trim()) {
			return Alert.alert("Novo participante", "Informe o nome da pessoa para adicionar.");
		}

		const novoParticipante: ParticipanteArmDTO = {
			nome: novoParticipanteNome,
			time,
		};
		try {
			await addParticipantePorGrupo(novoParticipante, grupo);
			novoParticipanteNomeEntradaRef.current?.blur();
			defNovoParticipanteNome("");
			buscarParticipantesPorTime();
		} catch (erro) {
			if (erro instanceof AppErro) {
				Alert.alert("Novo participante", erro.mensagem);
			} else {
				Alert.alert("Novo participante", "Não foi possível adicionar.");
				console.log(erro);
			}
		}
	}

	async function buscarParticipantesPorTime() {
		try {
			const participantes = await obterParticipantesPorGrupoETime(grupo, time);
			defParticipantes(participantes);
		} catch (erro) {
			console.log(erro);
			Alert.alert(
				"Participantes",
				"Não foi possível carregar os participantes do time selecionado."
			);
		}
	}

	async function lidarRemoverParticipante(nomeParticipante: string) {
		try {
			await removerParticipantePorGrupo(nomeParticipante, grupo);
			buscarParticipantesPorTime();
		} catch (erro) {
			console.log(erro);
			Alert.alert("Remover participante", "Não foi possível remover essa pessoa.");
		}
	}

	async function removerGrupo() {
		try {
			await removerGrupoPorNome(grupo);
			navegacao.navigate("grupos");
		} catch (erro) {
			console.log(erro);
			Alert.alert("Remover grupo", "Não foi possível remover o grupo.")
		}
	}

	async function lidarRemoverGrupo() {
		Alert.alert("Remover", "Deseja remover o grupo?", [
			{ text: "Não", style: "cancel" },
			{ text: "Sim", onPress: removerGrupo },
		]);
	}

	useEffect(() => {
		buscarParticipantesPorTime();
	}, [time]);

	return (
		<Conteiner>
			<Cabecalho mostrarBotaoVoltar />
			<Destaque titulo={grupo} subtitulo="adicione a galera e separe os times" />
			<Form>
				<Entrada
					entradaRef={novoParticipanteNomeEntradaRef}
					placeholder="Nome da pessoa"
					autoCorrect={false}
					onChangeText={defNovoParticipanteNome}
					value={novoParticipanteNome}
					onSubmitEditing={lidarAddParticipante}
					returnKeyType="done"
				/>
				<BotaoIcone icone="add" onPress={lidarAddParticipante} />
			</Form>
			<CabecalhoLista>
				<FlatList
					data={["Time A", "Time B"]}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Filtro titulo={item} estaAtivo={item == time} onPress={() => defTime(item)} />
					)}
					horizontal
				/>
				<NumeroDeParticipantes>{participantes.length}</NumeroDeParticipantes>
			</CabecalhoLista>
			<FlatList
				data={participantes}
				keyExtractor={(item) => item.nome}
				renderItem={({ item }) => (
					<ParticipanteCartao
						nome={item.nome}
						aoRemover={() => lidarRemoverParticipante(item.nome)}
					/>
				)}
				ListEmptyComponent={<ListaVazia mensagem="Não há pessoas nesse time." />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[{ paddingBottom: 100 }, !participantes.length && { flex: 1 }]}
			/>

			<Botao titulo="Remover turma" tipo="SECUNDARIO" onPress={lidarRemoverGrupo} />
		</Conteiner>
	);
}
