import { Question } from "../../types";

interface CurrentQuestionType {
  data: Question;
  currentIndex: number;
  totalQuestions: number;
}

const CurrentQuestion = ({
  data,
  currentIndex,
  totalQuestions,
}: CurrentQuestionType) => {
  return (
    <div>
      <p className="italic xs:text-sm md:text-md text-gray-navy dark:text-light-blue xl:text-xl">
        Question {currentIndex + 1} of {totalQuestions}
      </p>
      <h3>{data.question}</h3>
    </div>
  );
};

export default CurrentQuestion;
