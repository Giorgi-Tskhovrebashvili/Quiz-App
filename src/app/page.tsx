"use client";
import { useEffect, useState } from "react";
import {
  Button,
  FinalInfo,
  Loader,
  MainLayout,
  Quiz,
  Result,
  StartInfo,
  Subjects,
  SubmitError,
} from "./common/components";
import { Quizz } from "./common/types";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "./common/utils/localStorage";

export default function Home() {
  const [data, setData] = useState<Quizz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quizz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [hasCompleteAll, setHasCompleteAll] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: number; isCorrect: boolean }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
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
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        const quizzes = jsonData.quizzes as Quizz[];
        setData(quizzes);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const saveProgressToLocalStorage = () => {
    const progress = {
      selectedQuiz,
      currentQuestionIndex,
      userAnswers,
      hasCompleteAll,
    };
    saveToLocalStorage("quizProgress", progress);
  };

  if (loading) return <Loader />;
  if (error) return <SubmitError />;

  const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

  const handleSelectQuiz = (quiz: Quizz) => {
    const shuffledQuestions = shuffleArray(quiz.questions);
    setSelectedQuiz({ ...quiz, questions: shuffledQuestions });
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setHasCompleteAll(false);
    saveProgressToLocalStorage();
  };

  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    const newAnswers = [...userAnswers, { questionId, isCorrect }];
    setUserAnswers(newAnswers);

    if (selectedQuiz) {
      saveProgressToLocalStorage();
    }

    if (currentQuestionIndex < (selectedQuiz?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setHasCompleteAll(true);
      removeFromLocalStorage("quizProgress");
    }
  };

  return (
    <MainLayout>
      {!selectedQuiz && (
        <div className="flex flex-col gap-[40px] items-start w-[327px] mx-[24px] mt-[32px] md:w-[640px] md:gap-[64px] md:mx-[64px] md:mt-[23px] xl:flex-row xl:w-[1160px] xl:justify-between xl:mt-[16px]">
          <StartInfo />
          <Subjects data={data} onSelectQuiz={handleSelectQuiz} />
        </div>
      )}

      {selectedQuiz && !hasCompleteAll && (
        <Quiz
          selectedQuiz={selectedQuiz}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
        />
      )}

      {hasCompleteAll && selectedQuiz && (
        <div className="flex flex-col gap-[40px] items-start w-[327px] mx-[24px] mt-[32px] md:w-[640px] md:gap-[64px] md:mx-[64px] md:mt-[23px] xl:flex-row xl:w-[1160px] xl:justify-between xl:mt-[16px]">
          <FinalInfo />
          <div className="flex flex-col gap-[12px] md:gap-[32px]">
            <Result
              selectedQuiz={selectedQuiz}
              score={userAnswers.filter((ans) => ans.isCorrect).length}
            />
            <Button
              className="flex items-center justify-center p-[12px] w-[327px] rounded-[12px] dark:!bg-purple dark:!text-white shadow-lg transition-all text-[18px] font-medium not-italic leading-[18px] md:w-[640px] md:rounded-[24px] md:text-[28px] md:leading-[28px] xl:w-[564px] xl:p-[32px] hover:bg-custom-gradient"
              onClick={() => window.location.reload()}
            >
              Play Again
            </Button>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
