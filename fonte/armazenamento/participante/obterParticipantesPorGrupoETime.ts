import obterParticipantesPorGrupo from "./obterParticipantesPorGrupo";

export default async function obterParticipantesPorGrupoETime(grupo: string, time: string) {
	try {
		const armazenamento = await obterParticipantesPorGrupo(grupo);
		const participantes = armazenamento.filter((p) => p.time == time);
		return participantes;
	} catch (erro) {
		throw erro;
	}
}
