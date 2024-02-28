import { Category, Quiz } from "../types/globals.types";

export const Starter: Quiz = {
  id: "unique-2",
  title: "Starter",
  description: "This is the description",
  category: Category.Math,
  questions: [
    {
      question: "2+2=?",
      answer: 1,
      options: [
        { label: "4", value: 1 },
        { label: "5", value: 2 },
        { label: "6", value: 3 },
      ],
    },
    {
      question: "2*2=?",
      answer: 1,
      options: [
        { label: "4", value: 1 },
        { label: "5", value: 2 },
        { label: "6", value: 3 },
      ],
    },
    {
      question: "2-2=?",
      answer: 1,
      options: [
        { label: "0", value: 1 },
        { label: "4", value: 2 },
        { label: "10", value: 3 },
      ],
    },
  ],
};
