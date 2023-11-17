import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Grupos from "@tela/Grupos";
import NovoGrupo from "@tela/NovoGrupo";
import Participantes from "@tela/Participantes";

const { Navigator: Navegador, Screen: Tela } = createNativeStackNavigator();

export default function AppRotas() {
	return (
		<Navegador initialRouteName="grupos" screenOptions={{ headerShown: false }}>
			<Tela name="grupos" component={Grupos} />
			<Tela name="novo" component={NovoGrupo} />
			<Tela name="participantes" component={Participantes} />
		</Navegador>
	);
}
