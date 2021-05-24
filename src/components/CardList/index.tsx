import React from "react";

export default function CardList({ children }: React.PropsWithChildren<{}>) {
	return <ul className="py-10 space-y-6 lg:py-12">{children}</ul>;
}
