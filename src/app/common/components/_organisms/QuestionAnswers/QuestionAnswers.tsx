import { useState } from "react";
import { Button, CorrectAnswer, IncorrectAnswer, SubmitError } from "../..";
import { QuestionOptionsType } from "../../../types";
import { cn } from "../../../utils/utils";

const QuestionAnswers = ({
  data,
  answerLabels,
  goNextQuestion,
}: QuestionOptionsType) => {
  const [selectedAns, setSelectedAns] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!selectedAns) {
      setShowError(true);
      return;
    }

    setShowError(false);
    const correctAnswer = data.answer;
    const isAnswerCorrect = selectedAns === correctAnswer;

    setIsCorrect(isAnswerCorrect);
    setSubmitted(true);
  };

  const handleNextClick = () => {
    goNextQuestion(isCorrect || false);
    setSelectedAns("");
    setSubmitted(false);
    setIsCorrect(null);
  };

  const handleSelectAnswer = (answer: string) => {
    if (submitted) return;
    setSelectedAns(answer);
  };

  return (
    <div className="flex flex-col items-center gap-[12px] md:gap-[32px]">
      <ul className="flex flex-col items-start gap-[12px] w-[327px] md:w-[640px] md:gap-[24px] xl:w-[564px]">
        {data.options.map((answer, index) => (
          <li key={index}>
            <Button
              className={cn(
                selectedAns === answer && "border-[3px] border-purple",
                isCorrect === false &&
                  selectedAns === answer &&
                  "border-red border-[3px] border-solid",
                isCorrect === true &&
                  selectedAns === answer &&
                  "border-green border-[3px] border-solid",
                "flex justify-between items-center p-[12px] w-[327px] rounded-[12px] bg-white shadow-lg ring-1 hover:ring-purple transition-all md:w-[640px] md:rounded-[24px] xl:w-[564px] xl:p-[20px]"
              )}
              onClick={() => handleSelectAnswer(answer)}
              aria-label={`Answer option ${answerLabels[index]}`}
            >
              <div className="flex items-center gap-[16px] md:gap-[32px]">
                <span
                  className={cn(
                    selectedAns === answer && "bg-purple text-white",
                    isCorrect === false && selectedAns === answer && "bg-red",
                    isCorrect === true && selectedAns === answer && "bg-green",
                    "text-[18px] not-italic font-medium leading-[18px] md:text-[28px] md:leading-[28px] rounded-lg py-2 px-4 ring-1"
                  )}
                >
                  {answerLabels[index]}
                </span>
                <span className="text-[18px] not-italic font-medium leading-[18px] md:text-[28px] md:leading-[28px]">
                  {answer}
                </span>
              </div>
              {submitted && isCorrect === false && selectedAns === answer && (
                <IncorrectAnswer />
              )}
              {submitted && isCorrect === true && selectedAns === answer && (
                <CorrectAnswer />
              )}
              {submitted && isCorrect === false && answer === data.answer && (
                <CorrectAnswer />
              )}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        onClick={submitted ? handleNextClick : handleSubmit}
        className="flex items-center justify-center p-[12px] w-[327px] rounded-[12px] dark:!bg-purple dark:!text-white shadow-lg transition-all text-[18px] font-medium not-italic leading-[18px] md:w-[640px] md:rounded-[24px] md:text-[28px] md:leading-[28px] xl:w-[564px] xl:p-[32px] hover:bg-custom-gradient"
      >
        {submitted ? "Next Question" : "Submit Answer"}
      </Button>

      {showError && <SubmitError />}
    </div>
  );
};

export default QuestionAnswers;
