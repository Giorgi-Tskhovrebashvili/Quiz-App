import { useState } from "react";
import { QuestionOptionsType } from "../types";

const useQuestionAnswers = ({ data, goNextQuestion }: QuestionOptionsType) => {
  const [selectedAns, setSelectedAns] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showError, setShowError] = useState(false);

  const handleSelectAnswer = (answer: string) => {
    if (!submitted) {
      setSelectedAns(answer);
    }
  };

  const handleSubmit = () => {
    if (!selectedAns) {
      setShowError(true);
      return;
    }

    setShowError(false);
    const correctAnswer = data.answer;
    setIsCorrect(selectedAns === correctAnswer);
    setSubmitted(true);
  };

  const handleNextClick = () => {
    goNextQuestion(isCorrect || false);
    setSelectedAns("");
    setSubmitted(false);
    setIsCorrect(null);
  };

  return {
    selectedAns,
    submitted,
    isCorrect,
    showError,
    handleSelectAnswer,
    handleSubmit,
    handleNextClick,
  };
};

export default useQuestionAnswers;
