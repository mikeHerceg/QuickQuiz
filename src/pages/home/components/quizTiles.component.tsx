import { QuizSummary } from "../../../components/cards";
import { AllQuizes } from "../../../quizes/all.quiz";
import { Spacing } from "../../../theme/spacing.theme";
import { Grid } from "@chakra-ui/react";

export const QuizTiles = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={Spacing.md}>
      {AllQuizes.map(({ title, description, category, id }) => (
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
