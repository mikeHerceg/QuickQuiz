import { Divider, HStack, Input, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { Spacing } from "../../../theme";
import { Category } from "../../../types/globals.types";
import { useFilterContext } from "../filter.context";

export const SearchAndFilter = () => {
  const { filters, setFilters } = useFilterContext();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    setFilters({ ...filters });
  };

  return (
    <>
      <HStack gap={Spacing.md}>
        <Input
          onChange={handleSearch}
          value={filters?.search ?? ""}
          name={"search"}
        />
        <Select value={filters?.category ?? ""} onChange={handleSelect}>
          <option value={Category.History}>{Category.History}</option>
        </Select>
      </HStack>
      <Divider my={Spacing.lr} />
    </>
  );
};
