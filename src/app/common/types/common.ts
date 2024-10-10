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

export interface InputType {
  type: "text" | "checkbox";
  id: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonType {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean | undefined;
}

export interface SubjectsProps {
  data: Quizz[];
  onSelectQuiz: (quiz: Quizz) => void;
}

export interface SubjectSignType {
  title: string;
  icon: string;
  className: string;
}

export interface CurrentQuestionType {
  data: Question;
  currentIndex: number;
  totalQuestions: number;
}

export interface ProgressType {
  currentIndex: number;
  total: number;
}
