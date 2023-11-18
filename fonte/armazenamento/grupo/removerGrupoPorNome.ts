import AsyncStorage from "@react-native-async-storage/async-storage";
import { GRUPO_COLECAO, PARTICIPANTE_COLECAO } from "@arm/armConfig";
import obterGrupos from "./obterGrupos";

export default async function removerGrupoPorNome(grupoRemovido: string) {
	try {
		const gruposArmazenados = await obterGrupos();
		const grupos = gruposArmazenados.filter((g) => g != grupoRemovido);

		await AsyncStorage.setItem(GRUPO_COLECAO, JSON.stringify(grupos));
		await AsyncStorage.removeItem(`${PARTICIPANTE_COLECAO}-${grupoRemovido}`);
	} catch (erro) {
		throw erro;
	}
}
