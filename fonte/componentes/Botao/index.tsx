import { TouchableOpacityProps } from "react-native";
import { BotaoTipoEstiloProps, Conteiner, Titulo } from "./estilos";

type BotaoProps = TouchableOpacityProps & {
  titulo: string;
  tipo?: BotaoTipoEstiloProps;
}

export default function Botao({titulo, tipo = "PRIMARIO", ...rest}: BotaoProps) {
  return (
    <Conteiner tipo={tipo} {...rest}>
      <Titulo>{titulo}</Titulo>
    </Conteiner>
  )
}