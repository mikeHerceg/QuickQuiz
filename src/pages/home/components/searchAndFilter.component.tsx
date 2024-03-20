import { Divider, HStack } from "@chakra-ui/react";
import { Spacing } from "../../../theme";

export const SearchAndFilter = () => {
  return (
    <>
      <HStack gap={Spacing.md}>
        <span>Search Input</span> <span>category picker</span>
      </HStack>
      <Divider my={Spacing.lr} />
    </>
  );
};
