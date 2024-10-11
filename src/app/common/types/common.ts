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

export interface ResultType {
  selectedQuiz: Quizz;
  score: number;
}

export interface QuestionOptionsType {
  data: Question;
  answerLabels: string[];
  goNextQuestion: (isCorrect: boolean) => void;
}

export interface QuizType {
  selectedQuiz: Quizz;
  currentQuestionIndex: number;
  handleAnswer: (questionId: number, isCorrect: boolean) => void;
}

export interface MainLayoutType {
  children: React.ReactNode;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
