"use client";
import { useEffect, useState } from "react";
import { Intro, Loader, MainLayout, Quiz, Result, Subjects } from "./common/components";
import { Quizz } from "./common/types";

export default function Home() {
  const [data, setData] = useState<Quizz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quizz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [hasCompleteAll] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        const quizzes = jsonData.quizzes as Quizz[];
        console.log("Fetched Data:", quizzes);
        setData(quizzes);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleSelectQuiz = (quiz: Quizz) => {
    const shuffledQuestions = shuffleArray(quiz.questions);
    setSelectedQuiz({ ...quiz, questions: shuffledQuestions });
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (questionId: number, answer: string) => {
    if (!selectedQuiz) return;

    const updatedQuestions = selectedQuiz.questions.map((question) =>
      question.id === questionId
        ? { ...question, userSelectedAnswer: answer }
        : question
    );

    setSelectedQuiz({ ...selectedQuiz, questions: updatedQuestions });
  };

  const goNextQuestion = () => {
    if (
      selectedQuiz &&
      currentQuestionIndex < selectedQuiz.questions.length - 1
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <MainLayout>
      {!selectedQuiz && (
        <div className="flex flex-col gap-[40px] items-start w-[327px] mx-[24px] mt-[32px] md:w-[640px] md:gap-[64px] md:mx-[64px] md:mt-[23px] xl:flex-row xl:w-[1160px] xl:justify-between xl:mt-[16px]">
          <Intro />
          <Subjects data={data} onSelectQuiz={handleSelectQuiz} />
        </div>
      )}

      {selectedQuiz && (
        <Quiz
          selectedQuiz={selectedQuiz}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
          questionId={selectedQuiz.questions[currentQuestionIndex].id}
          goNextQuestion={goNextQuestion}
        />
      )}

      {/* {hasCompleteAll && (
        <Result selectedQuiz={selectedQuiz} score={0} />
      )} */}
    </MainLayout>
  );
}
