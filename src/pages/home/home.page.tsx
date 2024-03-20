import { Grid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { PageContainer } from "../../components";
import { QuizSummary } from "../../components/cards";
import { AllQuizes } from "../../quizes/all.quiz";
import { Spacing } from "../../theme/spacing.theme";

export const Home: FunctionComponent = () => {
  return (
    <PageContainer title="Home">
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
    </PageContainer>
  );
};
