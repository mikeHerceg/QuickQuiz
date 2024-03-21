export type Category = "Math" | "History";

export type QuestionOption = {
  value: number;
  label: string;
};

export type Question = {
  question: string;
  answer: number;
  options: QuestionOption[];
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  category: Category;
  questions: Question[];
};
