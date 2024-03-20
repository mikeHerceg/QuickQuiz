import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { PageContainer } from "../../components";
import { AllQuizes } from "../../quizes/all.quiz";
import { Button, Text, VStack } from "@chakra-ui/react";
import { Spacing } from "../../theme";
import { QuizNotFound } from "../../components/errors/quizNotFound.component";

export const Quiz: FunctionComponent = () => {
  const { quizId } = useParams();
  const quizConfig = AllQuizes.find(({ id }) => id === quizId);
  console.log(quizConfig);

  if (!quizConfig) return <QuizNotFound />;

  return (
    <PageContainer title={quizConfig.title} nav={<Link to={`/`}>Home</Link>}>
      <VStack gap={Spacing.md}>
        <Text textAlign="center">{quizConfig.description}</Text>
        <Button>Start</Button>
      </VStack>
    </PageContainer>
  );
};
