import {
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { ChangeEvent, useMemo } from "react";
import { CATEGORIES } from "../../../quizes/categories.constant";
import { Spacing } from "../../../theme";
import { useFilterContext } from "../filter.context";
import { SearchIcon } from "@chakra-ui/icons";
export const SearchAndFilter = () => {
  const { filters, setFilters } = useFilterContext();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setFilters({ ...filters, category: null });
    }
    setFilters({ ...filters, category: CATEGORIES[value] });
  };

  const categoryOtions = useMemo(() => {
    const keys = Object.keys(CATEGORIES);
    return keys.map((key) => ({ label: CATEGORIES[key], value: key }));
  }, []);

  return (
    <>
      <HStack gap={Spacing.md}>
        <InputGroup width={"100%"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            onChange={handleSearch}
            value={filters?.search ?? ""}
            name={"search"}
            placeholder="Search Quizzes"
          />
        </InputGroup>

        <Select onChange={handleSelect} width={"100%"}>
          <option value={"all"}>All Categories</option>
          {categoryOtions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </HStack>
      <Divider my={Spacing.lr} />
    </>
  );
};
