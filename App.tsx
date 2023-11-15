import Grupos from "@tela/Grupos";
import tema from "./fonte/tema";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import Carregando from "@comp/Carregando";
import { StatusBar } from "react-native";

export default function App() {
	const [fontesCarregadas] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<ThemeProvider theme={tema}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{fontesCarregadas ? <Grupos /> : <Carregando />}
		</ThemeProvider>
	);
}
