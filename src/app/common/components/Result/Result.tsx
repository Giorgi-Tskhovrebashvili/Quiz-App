import { SubjectSign } from "..";
import { Quizz } from "../../types";

interface ResultType {
    selectedQuiz: Quizz;
    score: number;
}

const Result = ({ selectedQuiz, score }: ResultType) => {
    if (!selectedQuiz) return null;

  return (
    <div className="flex flex-col gap-4 bg-[#fff] dark:bg-slate p-10 rounded-xl">
      <SubjectSign title={selectedQuiz.title} icon={selectedQuiz.icon} className={""} />
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-dark-blue dark:text-white font-bold xs:text-5xl sm:text-5xl lg:text-9xl">
          {score}
        </p>
        <span className="text-dark-blue dark:text-white text-sm font-thin">
          Out of {selectedQuiz.questions.length}
        </span>
      </div>
    </div>
  )
}

export default Result
