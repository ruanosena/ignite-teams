import "styled-components/native";
import tema from "../tema";

declare module "styled-components/native" {
	type ThemeType = typeof tema;

	export interface DefaultTheme extends ThemeType {}
}
