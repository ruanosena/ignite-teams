import { Conteiner, SubTitulo, Titulo } from "./estilos";

type DestaqueProps = {
	titulo: string;
	subtitulo: string;
};

export default function Destaque({ titulo, subtitulo }: DestaqueProps) {
	return (
		<Conteiner>
			<Titulo>{titulo}</Titulo>
			<SubTitulo>{subtitulo}</SubTitulo>
		</Conteiner>
	);
}
