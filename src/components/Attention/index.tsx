import classNames from "classnames";

interface AttentionProps {
	readonly text: string;
	readonly className?: string;
}

export default function Attention({ text, className }: AttentionProps) {
	return <b className={classNames("font-medium", className)}>{text}</b>;
}
