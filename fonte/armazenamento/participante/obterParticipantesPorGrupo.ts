import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParticipanteArmDTO } from "./ParticipanteArmDTO";
import { PARTICIPANTE_COLECAO } from "@arm/armConfig";

export default async function obterParticipantesPorGrupo(grupo: string) {
	try {
		const armazenamento = await AsyncStorage.getItem(`${PARTICIPANTE_COLECAO}-${grupo}`);
		const participantes: ParticipanteArmDTO[] = armazenamento ? JSON.parse(armazenamento) : [];

		return participantes;
	} catch (erro) {
		throw erro;
	}
}
