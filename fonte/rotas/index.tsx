import { NavigationContainer as NavegacaoConteiner } from "@react-navigation/native";
import AppRotas from "./app.rotas";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export default function Rotas() {
	const { COLORS } = useTheme();

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
			<NavegacaoConteiner>
				<AppRotas />
			</NavegacaoConteiner>
		</View>
	);
}
