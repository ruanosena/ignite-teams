import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppErro } from "@util/AppErro";
import { PARTICIPANTE_COLECAO } from "@arm/armConfig";
import { ParticipanteArmDTO } from "./ParticipanteArmDTO";
import obterParticipantesPorGrupo from "./obterParticipantesPorGrupo";

export default async function addParticipantePorGrupo(
	novoParticipante: ParticipanteArmDTO,
	grupo: string
) {
	/*
  @ignite-teams:participantes-grupoNome
   */
	try {
		const participantesArmazenados = await obterParticipantesPorGrupo(grupo);
		const participanteJaExiste = participantesArmazenados.filter(
			(p) => (p.nome.toLowerCase() == novoParticipante.nome.toLowerCase())
		);

		if (participanteJaExiste.length) {
			throw new AppErro("Essa pessoa já faz parte de um time nesse grupo.");
		}

		const armazenamento = JSON.stringify([...participantesArmazenados, novoParticipante]);
		await AsyncStorage.setItem(`${PARTICIPANTE_COLECAO}-${grupo}`, armazenamento);
	} catch (erro) {
		throw erro;
	}
}
