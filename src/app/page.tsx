"use client";
import { useEffect, useState } from "react";
import {
  Intro,
  Loader,
  MainLayout,
  Quiz,
  Subjects,
} from "./common/components";
import { Quizz } from "./common/types";

export default function Home() {
  const [data, setData] = useState<Quizz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quizz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
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

  const handleNextQuestion = () => {
    if (
      selectedQuiz &&
      currentQuestionIndex < selectedQuiz.questions.length - 1
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <MainLayout>
      {data.length > 0 ? (
        <div className="flex gap-[20px]">
          <Intro />
          <Subjects data={data} onSelectQuiz={handleSelectQuiz} />
        </div>
      ) : (
        <p>No data available</p>
      )}

      {selectedQuiz && (
        <Quiz
          selectedQuiz={selectedQuiz}
          currentQuestionIndex={currentQuestionIndex}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
        />
      )}
    </MainLayout>
  );
}
