import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";
import { Quizz } from "../types";

const useFetch = () => {
  const [data, setData] = useState<Quizz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quizz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasCompleteAll, setHasCompleteAll] = useState(false);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: number; isCorrect: boolean }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedQuiz = getFromLocalStorage("quizProgress");
    if (savedQuiz) {
      setSelectedQuiz(savedQuiz.selectedQuiz);
      setCurrentQuestionIndex(savedQuiz.currentQuestionIndex);
      setUserAnswers(savedQuiz.userAnswers);
      setHasCompleteAll(savedQuiz.hasCompleteAll);
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const jsonData = await response.json();
        setData(jsonData.quizzes as Quizz[]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveProgress = () => {
    const progress = {
      selectedQuiz,
      currentQuestionIndex,
      userAnswers,
      hasCompleteAll,
    };
    saveToLocalStorage("quizProgress", progress);
  };

  return {
    data,
    selectedQuiz,
    setSelectedQuiz,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    hasCompleteAll,
    setHasCompleteAll,
    userAnswers,
    setUserAnswers,
    loading,
    error,
    saveProgress,
  };
};

export default useFetch;
