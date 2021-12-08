import { Text, TextProps } from "@chakra-ui/react";

type AttentionTextProps = Omit<TextProps, "as">;

export const AttentionText = ({ children, ...props }: AttentionTextProps) => (
	<Text as="b" fontWeight="medium" {...props}>
		{children}
	</Text>
);
