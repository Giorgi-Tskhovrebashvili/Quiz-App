import { SubjectSign } from "../..";
import { ResultType } from "../../../types";

const Result = ({ selectedQuiz, score }: ResultType) => {
  if (!selectedQuiz) return null;

  return (
    <div className=" Result flex flex-col items-center gap-4 p-10 rounded-xl">
      <SubjectSign
        title={selectedQuiz.title}
        icon={selectedQuiz.icon}
        className={"flex items-center gap-[16px] md:gap-[24px]"}
      />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[88px] not-italic font-medium leading-[88px] md:text-[144px] md:leading-[144px]">
          {score}
        </p>
        <span className="text-[#ABC1E1] text-[18px] not-italic font-normal leading-[18px] md:text-[24px] md:leading-[36px]">
          Out of {selectedQuiz.questions.length}
        </span>
      </div>
    </div>
  );
};

export default Result;
