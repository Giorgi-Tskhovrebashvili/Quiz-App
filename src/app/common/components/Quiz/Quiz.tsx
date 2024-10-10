import { useState } from "react";
import {
  Button,
  CurrentQuestion,
  Progress,
  QuestionAnswers,
  SubjectSign,
} from "..";
import { Quizz } from "../../types";
import QuizData from '../../../../../public/data.json'

interface QuizType {
  selectedQuiz: Quizz;
  currentQuestionIndex: number;
  handleAnswer: (questionId: number, answer: string) => void;
  questionId: number;
  goNextQuestion: () => void;
}

const Quiz = ({
  selectedQuiz,
  currentQuestionIndex,
  handleAnswer,
  goNextQuestion,
  questionId,
}: QuizType) => {
  const [selectedAns, setSelectedAns] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const currentQuestion = selectedQuiz.questions.find(
    (q) => q.id === questionId
  );

  if (!currentQuestion) {
    return <p>No question found.</p>;
  }

  const answerLabels = ["A", "B", "C", "D"];

  const handleSelectAnswer = (answer: string) => {
    if (submitted) return;
    setSelectedAns((prev) => (prev === answer ? "" : answer));
  };

  const handleSubmit = () => {
    if (!selectedAns) return;

    handleAnswer(questionId, selectedAns);
    setSubmitted(true);
  };

  const handleNextClick = () => {
    goNextQuestion();
    setSelectedAns("");
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col gap-[40px] items-start w-[327px] mx-[24px] mt-[32px] md:w-[640px] md:gap-[64px] md:mx-[64px] md:mt-[23px] xl:flex-row xl:w-[1160px] xl:justify-between xl:mt-[16px]">
      <div className="flex flex-col items-start gap-[24px] w-[327px] md:w-[640px] md:gap-[40px] xl:w-[465px] xl:gap-[48px]">
        <SubjectSign
          title={selectedQuiz.title}
          icon={selectedQuiz.icon}
          className={
            "flex gap-[16px] items-center justify-center absolute top-[12px] md:gap-[24px] md:top-[32px] xl:top-[75px]"
          }
        />
        <CurrentQuestion
          data={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={selectedQuiz.questions.length}
        />
        <Progress
          currentIndex={currentQuestionIndex + 1}
          total={selectedQuiz.questions.length}
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        <QuestionAnswers
          data={currentQuestion}
          selectedAns={selectedAns || ""}
          handleSelectAnswer={handleSelectAnswer}
          answerLabels={answerLabels}
        />
        <Button
          onClick={submitted ? handleNextClick : handleSubmit}
          className="w-full dark:!bg-[#A729F5] p-[12px] rounded-xl shadow-lg text-white font-semibold text-lg text-center"
        >
          {submitted ? "Next Question" : "Submit Answer"}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
