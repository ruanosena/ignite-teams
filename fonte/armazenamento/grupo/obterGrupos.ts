import AsyncStorage from "@react-native-async-storage/async-storage";
import { GRUPO_COLECAO } from "@arm/armConfig";

export default async function obterGrupos() {
	try {
		const armazenamento = await AsyncStorage.getItem(GRUPO_COLECAO);
		const grupos: string[] = armazenamento ? JSON.parse(armazenamento) : [];
		return grupos;
	} catch (erro) {
		throw erro;
	}
}
