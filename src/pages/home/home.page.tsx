import { HStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../components";
import { AllQuizes } from "../../quizes/all.quiz";

export const Home: FunctionComponent = () => {
  return (
    <PageContainer
      title="Home"
      nav={
        <HStack gap={3}>
          {AllQuizes.map((quiz) => (
            <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
              {quiz.title}
            </Link>
          ))}
        </HStack>
      }
    >
      hello
    </PageContainer>
  );
};
