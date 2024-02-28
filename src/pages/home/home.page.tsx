import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AllQuizes } from "../../quizes/all.quiz";

export const Home: FunctionComponent = () => {
  return (
    <>
      {AllQuizes.map((quiz) => (
        <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
          {quiz.title}
        </Link>
      ))}
    </>
  );
};
