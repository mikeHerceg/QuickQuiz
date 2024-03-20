import { FunctionComponent } from "react";
import { PageContainer } from "../../components";
import { QuizTiles } from "./components/quizTiles.component";
import { SearchAndFilter } from "./components/searchAndFilter.component";
import { FilterContextProvider } from "./filter.context";

export const Home: FunctionComponent = () => {
  return (
    <FilterContextProvider>
      <PageContainer title="Home">
        <SearchAndFilter />
        <QuizTiles />
      </PageContainer>
    </FilterContextProvider>
  );
};
