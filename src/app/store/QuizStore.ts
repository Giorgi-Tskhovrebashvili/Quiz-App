import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { Quizz, State } from "../common/types/common";

export const useQuestionStore = create<State>()(
  persist(
    (set, get) => {
      return {
        quizzes: [],
        questions: [],
        score: 0,
        selectedQuizz: null,
        currentQuestion: 0,
        hasCompleteAll: false,
        selectQuizz: (quizz: Quizz) => {
          set({ selectedQuizz: quizz, questions: quizz.questions });
        },
        fetchQuizzes: async () => {
          try {
            const res = await fetch(`/data.json`);
            const json = await res.json();
            const quizzes = json.quizzes as Quizz[];
            set({ quizzes, hasCompleteAll: false }, false);
          } catch (error) {
            console.log(error);
          }
        },

        selectAnswer: (questionId: number, selectedAnswer: string) => {
          const { questions } = get();
          const newQuestions = structuredClone(questions);
          const questionIndex = newQuestions.findIndex(
            (q) => q.id === questionId
          );
          const questionInfo = newQuestions[questionIndex];
          const isCorrectUserAnswer = questionInfo.answer === selectedAnswer;

          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: selectedAnswer,
          };
          // actualizamos el estado
          set({ questions: newQuestions }, false);
        },
        onCompleteQuestions: () => {
          const { questions } = get();
          const score = questions.filter((q) => q.isCorrectUserAnswer).length;

          set({ hasCompleteAll: true, currentQuestion: 0, score });
        },
        goNextQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion }, false);
          }
        },

        goPreviousQuestion: () => {
          const { currentQuestion } = get();
          const previousQuestion = currentQuestion - 1;

          if (previousQuestion >= 0) {
            set({ currentQuestion: previousQuestion }, false);
          }
        },

        reset: () => {
          set(
            {
              currentQuestion: 0,
              questions: [],
              hasCompleteAll: false,
              selectedQuizz: null,
            },
            false
          );
        },
      };
    },
    {
      name: "quizz",
    }
  )
);
