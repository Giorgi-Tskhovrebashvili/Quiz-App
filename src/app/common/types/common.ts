export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    isCorrectUserAnswer?: boolean | null;
    userSelectedAnswer?: string | null;
  }
  
  export interface Quizz {
    title: string;
    icon: string;
    questions: Question[];
  }

  export interface State {
    quizzes: Quizz[];
    questions: Question[];
    selectedQuizz: Quizz | null;
    currentQuestion: number;
    hasCompleteAll: boolean;
    score: number;
    selectQuizz: (quizz: Quizz) => void;
    fetchQuizzes: () => Promise<void>;
    selectAnswer: (questionId: number, selectedAnswer: string) => void;
    goNextQuestion: () => void;
    goPreviousQuestion: () => void;
    onCompleteQuestions: () => void;
    reset: () => void;
  }