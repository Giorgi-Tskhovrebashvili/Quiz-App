import { Button, CorrectAnswer, IncorrectAnswer, SubmitError } from "../..";
import { QuestionOptionsType } from "../../../types";
import { cn } from "../../../utils/utils";
import useQuestionAnswers from "../../../hooks/useQuestionAnswers";

const QuestionAnswers = ({
  data,
  answerLabels,
  goNextQuestion,
}: QuestionOptionsType) => {
  const {
    selectedAns,
    submitted,
    isCorrect,
    showError,
    handleSelectAnswer,
    handleSubmit,
    handleNextClick,
  } = useQuestionAnswers({ data, answerLabels, goNextQuestion });

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
                "flex justify-between items-center p-[12px] w-[327px] h-[64px] rounded-[12px] bg-white shadow-lg ring-1 hover:ring-purple transition-all md:w-[640px] md:h-[80px] md:rounded-[24px] xl:w-[564px] xl:px-[20px] xl:py-[18px] xl:h-[92px]"
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
        className="flex items-center justify-center p-[12px] w-[327px] h-[56px] rounded-[12px] self-stretch dark:!bg-purple dark:!text-white shadow-lg transition-all text-[18px] font-medium not-italic leading-[18px] md:w-[640px] md:h-[80px] md:rounded-[24px] md:text-[28px] md:leading-[28px] md:p-[32px] xl:w-[564px] hover:bg-custom-gradient"
      >
        {submitted ? "Next Question" : "Submit Answer"}
      </Button>

      {showError && <SubmitError />}
    </div>
  );
};

export default QuestionAnswers;
