import React from "react";

export default function CardList({ children }: React.PropsWithChildren<{}>) {
	return <ul className="px-4 py-12 space-y-6">{children}</ul>;
}
