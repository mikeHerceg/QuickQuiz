import { QuizSummary } from "../../../components/cards";
import { AllQuizes } from "../../../quizes/all.quiz";
import { Spacing } from "../../../theme/spacing.theme";
import { Grid } from "@chakra-ui/react";
import { useFilterContext } from "../filter.context";
import { useEffect, useState } from "react";

export const QuizTiles = () => {
  const { filters } = useFilterContext();
  const [quizzes, setQuizzes] = useState(AllQuizes);
  useEffect(() => {
    const { category, search } = filters;
    // filter by category
    const byCategory = category
      ? AllQuizes.filter(({ category }) => category === category)
      : AllQuizes;
    // then by search
    const bySearch = search
      ? byCategory.filter(({ title, description }) => {
          const searchValue = search.toLowerCase() ?? "";

          if (title.toLowerCase().includes(searchValue)) {
            return true;
          }

          if (description.toLowerCase().includes(searchValue)) {
            return true;
          }

          return false;
        })
      : byCategory;

    //set results
    setQuizzes(bySearch);
  }, [filters]);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={Spacing.md}>
      {quizzes.map(({ title, description, category, id }) => (
        <QuizSummary
          key={id}
          title={title}
          description={description}
          category={category}
          link={`/quiz/${id}`}
        />
      ))}
    </Grid>
  );
};
