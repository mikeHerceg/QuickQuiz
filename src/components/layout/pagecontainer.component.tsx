import {
  Box,
  Heading,
  HStack,
  SkipNavContent,
  SkipNavLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { Colors } from "../../theme/colors.theme";
import { Spacing } from "../../theme/spacing.theme";

interface PageContainerProps extends PropsWithChildren {
  title: string;
  nav?: JSX.Element;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  title,
  nav,
  children,
}) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <VStack
        padding={Spacing.md}
        as="main"
        justifyContent={"center"}
        gap={Spacing.sm}
        width="100vw"
        height="100vh"
        maxW="1600px"
        margin="auto"
      >
        <HStack
          as="header"
          justifyContent="space-between"
          width="100%"
          borderBottomColor={Colors.grayLight}
          borderBottomWidth={"2px"}
          borderBlockStartStyle="solid"
          pb={Spacing.md}
        >
          <Text fontSize="2xl" fontWeight="bold">
            QUICK QUIZ
          </Text>
          {nav}
        </HStack>
        <SkipNavContent />
        <Heading as="h1" mb={Spacing.lr}>
          {title}
        </Heading>
        <Box as="section" flexGrow={1} maxW="900px" width={"100%"}>
          {children}
        </Box>
      </VStack>
    </>
  );
};
