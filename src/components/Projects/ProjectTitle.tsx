import { AttentionText } from "@/components/AttentionText";
import { ReactNode } from "react";

type ProjectTitleProps = {
	readonly children: ReactNode;
};

export const ProjectTitle = ({ children }: ProjectTitleProps) => (
	<AttentionText fontSize="xl">{children}</AttentionText>
);
