import { TextProps, Text } from "@chakra-ui/react";
import { Colors, FontWeight } from "../../theme";

interface TypeProps extends TextProps {
  text: string;
}

export const SectionHeader = ({ text, ...props }: TypeProps) => (
  <Text
    size="lr"
    fontWeight={FontWeight.bold}
    color={Colors.primary}
    {...props}
  >
    {text}
  </Text>
);

export const SectionSubHeader = ({ text, ...props }: TypeProps) => (
  <Text size="md" fontWeight={FontWeight.semiBold} {...props}>
    {text}
  </Text>
);

export const BodyText = ({ text, ...props }: TypeProps) => (
  <Text size="sm" {...props}>
    {text}
  </Text>
);

export const BoldText = ({ ...props }: TypeProps) => (
  <BodyText fontWeight={FontWeight.bold} {...props}></BodyText>
);
