import AsyncStorage from "@react-native-async-storage/async-storage";
import { PARTICIPANTE_COLECAO } from "@arm/armConfig";
import obterParticipantesPorGrupo from "./obterParticipantesPorGrupo";

export default async function removerParticipantePorGrupo(participanteNome: string, grupo: string) {
	try {
		const armazenamento = await obterParticipantesPorGrupo(grupo);
		const filtrado = armazenamento.filter((p) => p.nome != participanteNome);
		const participantes = JSON.stringify(filtrado);
		await AsyncStorage.setItem(`${PARTICIPANTE_COLECAO}-${grupo}`, participantes);
	} catch (erro) {
		throw erro;
	}
}
