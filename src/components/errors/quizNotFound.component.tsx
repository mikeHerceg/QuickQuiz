import { Button, VStack } from "@chakra-ui/react";
import { SectionHeader } from "../typography";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../layout";
import { Spacing } from "../../theme";

export const QuizNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <PageContainer title="Oh Nooooo">
      <VStack gap={Spacing.md}>
        <SectionHeader text={"Quiz not found"} />
        <Button onClick={handleGoBack}>Go Back</Button>
      </VStack>
    </PageContainer>
  );
};
