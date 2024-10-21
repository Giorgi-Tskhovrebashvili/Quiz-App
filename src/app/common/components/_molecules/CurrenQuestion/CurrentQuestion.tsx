import { CurrentQuestionType } from "../../../types";

const CurrentQuestion = ({
  data,
  currentIndex,
  totalQuestions,
}: CurrentQuestionType) => {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[27px]">
      <p className="text-[14px] italic font-normal leading-[21px] text-[#ABC1E1] md:text-[20px] md:leading-[30px]">
        Question {currentIndex + 1} of {totalQuestions}
      </p>
      <h3 className="text-[20px] not-italic font-medium leading-[24px] md:text-[36px] md:leading-[43.2px] self-stretch">
        {data.question}
      </h3>
    </div>
  );
};

export default CurrentQuestion;
