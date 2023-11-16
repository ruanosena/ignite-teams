import { Conteiner, Mensagem } from "./estilos";

type ListaVaziaProps = {
	mensagem: string;
};

export default function ListaVazia({ mensagem }: ListaVaziaProps) {
	return (
		<Conteiner>
			<Mensagem>{mensagem}</Mensagem>
		</Conteiner>
	);
}
