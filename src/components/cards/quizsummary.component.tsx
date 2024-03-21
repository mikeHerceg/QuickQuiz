import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Spacing } from "../../theme";
import { Category } from "../../types/globals.types";
import { BodyText, SectionHeader, SectionSubHeader } from "../typography";

interface QuizSummaryProps extends PropsWithChildren {
  title: string;
  description: string;
  category: Category;
  link: string;
}

export const QuizSummary: FunctionComponent<QuizSummaryProps> = ({
  title,
  description,
  category,
  link,
}) => {
  return (
    <Link to={link}>
      <Card padding={Spacing.lr}>
        <CardHeader p={0} mb={Spacing.sm}>
          <SectionHeader text={title} />
          <SectionSubHeader text={category} />
        </CardHeader>
        <CardBody p={0}>
          <BodyText text={description} />
        </CardBody>
      </Card>
    </Link>
  );
};
