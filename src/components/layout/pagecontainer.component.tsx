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
        padding={4}
        as="main"
        justifyContent={"center"}
        gap={3}
        width="100vw"
        height="100vh"
        maxW="1600px"
        margin="auto"
      >
        <HStack
          as="header"
          justifyContent="space-between"
          width="100%"
          borderBottomColor={"gray.300"}
          borderBottomWidth={"2px"}
          borderBlockStartStyle="solid"
          pb={4}
        >
          <Text fontSize="2xl" fontWeight="bold">
            QUICK QUIZ
          </Text>
          {nav}
        </HStack>
        <SkipNavContent />
        <Heading as="h1" mb={6}>
          {title}
        </Heading>
        <Box as="section" flexGrow={1} maxW="900px">
          {children}
        </Box>
      </VStack>
    </>
  );
};
