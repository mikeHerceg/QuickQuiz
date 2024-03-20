import { createContext, FunctionComponent, useState } from "react";
import { Category } from "../../types/globals.types";

type Filters = { search: null | string; category: null | Category };

type FilterContext = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const filterContext = createContext<FilterContext | undefined>(undefined);

export const FilterContextProvider: FunctionComponent<{
  children: JSX.Element;
}> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    search: null,
    category: null,
  });

  const context = { filters, setFilters };

  return (
    <filterContext.Provider value={context}>{children}</filterContext.Provider>
  );
};
