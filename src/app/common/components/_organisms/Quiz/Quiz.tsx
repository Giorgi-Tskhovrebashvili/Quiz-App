import { CurrentQuestion, Progress, QuestionAnswers, SubjectSign } from "../..";
import { QuizType } from "../../../types";

const Quiz = ({
  selectedQuiz,
  currentQuestionIndex,
  handleAnswer,
}: QuizType) => {
  const currentQuestion = selectedQuiz.questions[currentQuestionIndex];

  if (!currentQuestion) return <p>No question found.</p>;

  const answerLabels = ["A", "B", "C", "D"];

  const goNextQuestion = (isCorrect: boolean) => {
    handleAnswer(currentQuestion.id, isCorrect);
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
      <div>
        <QuestionAnswers
          data={currentQuestion}
          answerLabels={answerLabels}
          goNextQuestion={goNextQuestion}
        />
      </div>
    </div>
  );
};

export default Quiz;
