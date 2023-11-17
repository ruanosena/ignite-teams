import Cabecalho from "@comp/Cabecalho";
import { CabecalhoLista, Conteiner, Form, NumeroDeParticipantes } from "./estilos";
import Destaque from "@comp/Destaque";
import BotaoIcone from "@comp/BotaoIcone";
import Entrada from "@comp/Entrada";
import Filtro from "@comp/Filtro";
import { FlatList } from "react-native";
import { useState } from "react";
import ParticipanteCartao from "@comp/ParticipanteCartao";
import ListaVazia from "@comp/ListaVazia";
import Botao from "@comp/Botao";
import { useRoute } from "@react-navigation/native";

type RotaParams = {
	grupo: string;
};

export default function Participantes() {
	const [time, defTime] = useState<string>("Time A");
	const [participantes, defParticipantes] = useState<string[]>([]);

	const rota = useRoute();
	const { grupo } = rota.params as RotaParams;

	return (
		<Conteiner>
			<Cabecalho mostrarBotaoVoltar />
			<Destaque titulo={grupo} subtitulo="adicione a galera e separe os times" />
			<Form>
				<Entrada placeholder="Nome da pessoa" autoCorrect={false} />
				<BotaoIcone icone="add" />
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
				keyExtractor={(item) => item}
				renderItem={({ item }) => <ParticipanteCartao nome={item} aoRemover={() => null} />}
				ListEmptyComponent={<ListaVazia mensagem="Não há pessoas nesse time." />}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[{ paddingBottom: 100 }, !participantes.length && { flex: 1 }]}
			/>

			<Botao titulo="Remover turma" tipo="SECUNDARIO" />
		</Conteiner>
	);
}
