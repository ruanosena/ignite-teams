import { GRUPO_COLECAO } from "@arm/armConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import obterGrupos from "./obterGrupos";
import { AppErro } from "@util/AppErro";

export default async function criarGrupo(novoGrupoNome: string) {
	try {
		const gruposArmazenados = await obterGrupos();
    const grupoJaExiste = gruposArmazenados.includes(novoGrupoNome);
    if (grupoJaExiste) {
      throw new AppErro("Já existe um grupo cadastrado com esse nome.")
    }

		const armazenamento = JSON.stringify([...gruposArmazenados, novoGrupoNome]);
		await AsyncStorage.setItem(GRUPO_COLECAO, armazenamento);
	} catch (erro) {
		throw erro;
	}
}
