import Attention from "../Attention";

interface SidenoteProps {
	readonly top: string;
	readonly center: string;
	readonly bottom: string;
}

export default function Sidenote({ top, center, bottom }: SidenoteProps) {
	return (
		<li>
			<small className="text-gray-500">{top}</small>
			<br />
			<Attention
				text={center}
				className="text-xl text-gray-700 lg:text-2xl"
			/>
			<br />
			<small className="text-gray-500">{bottom}</small>
		</li>
	);
}
