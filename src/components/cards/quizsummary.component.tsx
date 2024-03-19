import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Colors, fontWeight, Spacing } from "../../theme";
import { Category } from "../../types/globals.types";

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
          <Text fontWeight={fontWeight.bold} color={Colors.primary}>
            {title}
          </Text>
          <Text fontWeight={fontWeight.bold} color={Colors.primaryLight}>
            {Category[category]}
          </Text>
        </CardHeader>
        <CardBody p={0}>
          <Text>{description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};
