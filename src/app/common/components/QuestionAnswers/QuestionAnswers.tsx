import { useState } from "react";
import { Button } from "..";
import { Question } from "../../types";
import { cn } from "../../utils/utils";

interface QuestionOptionsType {
  data: Question;
  selectedAns: string;
  handleSelectAnswer: (answer: string) => void;
  answerLabels: string[];
}

const QuestionAnswers = ({
  data,
  handleSelectAnswer,
  answerLabels,
  selectedAns,
}: QuestionOptionsType) => {
  return (
    <div>
      <ul className="flex flex-col items-start gap-[12px] w-[327px] md:w-[640px] md:gap-[24px] xl:w-[564px]">
        {data.options.map((answer, index) => (
          <li key={index}>
            <Button
              className={cn(
                selectedAns === answer && "ring-purple ring-1",
                "flex items-center p-[12px] w-[327px] rounded-[12px] bg-white shadow-lg ring-1 hover:ring-purple hover:border-[3px] hover:border-solid hover:border-purple transition-all md:w-[640px] md:rounded-[24px] xl:w-[564px] xl:p-[20px] gap-[16px] md:gap-[32px]"
              )}
              onClick={() => handleSelectAnswer(answer)}
              aria-label={`Answer option ${answerLabels[index]}`}
            >
              <span
                className={cn(
                  selectedAns === answer
                    ? "bg-purple text-white"
                    : "bg-white dark:text-[#626C7F] group-hover:text-purple group-hover:bg-[#F6E7FF] transition-all",
                  "text-[18px] not-italic font-medium leading-[18px] md:text-[28px] md:leading-[28px] rounded-lg py-2 px-4 ring-1 "
                )}
              >
                {answerLabels[index]}
              </span>
              <span className="text-[18px] not-italic font-medium leading-[18px] md:text-[28px] md:leading-[28px]">
                {answer}
              </span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionAnswers;
