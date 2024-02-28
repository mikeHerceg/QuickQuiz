import { Category, Quiz } from "../types/globals.types";

export const Starter_two: Quiz = {
  id: "unique-1",
  title: "Starter Two",
  description: "This is the description",
  category: Category.History,
  questions: [
    {
      question: "Where is the liberty bell?",
      answer: 1,
      options: [
        { label: "Philadelphia", value: 1 },
        { label: "Dallas", value: 2 },
        { label: "Washinton DC", value: 3 },
      ],
    },
    {
      question: "When was the Declaration of Independence written",
      answer: 1,
      options: [
        { label: "1776", value: 1 },
        { label: "1877", value: 2 },
        { label: "1698", value: 3 },
      ],
    },
    {
      question: "Who invented the lightbulb",
      answer: 2,
      options: [
        { label: "Thomas Jefferson", value: 1 },
        { label: "Thomas Edison", value: 2 },
        { label: "Ben Fraklin", value: 3 },
      ],
    },
  ],
};
