import {
  Button,
  CurrentQuestion,
  Progress,
  QuestionOptions,
  SubjectSign,
} from "..";
import { Quizz } from "../../types";

interface QuizType {
  selectedQuiz: Quizz;
  currentQuestionIndex: number;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
}

const Quiz = ({
  selectedQuiz,
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
}: QuizType) => {
  return (
    <div className="flex gap-[30px]">
      <div>
        <div>
          <SubjectSign title={selectedQuiz.title} icon={selectedQuiz.icon} />
          <CurrentQuestion
            data={selectedQuiz.questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={selectedQuiz.questions.length}
          />
        </div>
        <Progress
          currentIndex={currentQuestionIndex + 1}
          total={selectedQuiz.questions.length}
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <QuestionOptions data={selectedQuiz.questions[currentQuestionIndex]} />
        <div className="flex gap-[30px]">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className=""
          >
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={
              currentQuestionIndex === selectedQuiz.questions.length - 1
            }
            className=""
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
