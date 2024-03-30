/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";
import { Quiz } from "../../types/globals.types";
import { kababCase } from "../../utils";

type QuizContext = {
  quiz: Quiz;
  hasStarted: boolean;
  hasFinished: boolean;
  currentQuestionId: string;
  answers: Record<string, string>;
  handleSubmit: (answer: string) => void;
};

const QuizContext = createContext<QuizContext | undefined>(undefined);

export const QuizContextProvider: FunctionComponent<{
  children: JSX.Element;
  quiz: Quiz;
}> = ({ children, quiz }) => {
  const startId = "start";
  const finishedId = "finished";
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(startId);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questionIds: string[] = useMemo(() => {
    const questions = quiz.questions.map((question, index) => {
      return `${kababCase(question.question)}-${index}`;
    });
    return [...questions, finishedId];
  }, [quiz.questions]);

  const nextQuestion = () => {
    const nextQuestionIndex =
      questionIds.findIndex((id) => id === currentQuestionId) + 1;
    const nextQuestionId = questionIds[nextQuestionIndex];
    if (nextQuestionId === finishedId) {
      setHasFinished(true);
    }
    setCurrentQuestionId(nextQuestionId);
    setAnswers({});
  };

  const handleSubmit = (answer?: string) => {
    if (currentQuestionId === startId) {
      setHasStarted(true);
      nextQuestion();
      return;
    }
    if (answer) {
      setAnswers({ ...answers, [currentQuestionId]: answer });
    }
    nextQuestion();
  };

  const context = {
    quiz,
    hasStarted,
    hasFinished,
    currentQuestionId,
    answers,
    handleSubmit,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw Error("No Quiz Context");
  }
  return context;
};
