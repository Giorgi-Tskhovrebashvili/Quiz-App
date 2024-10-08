"use client";
import { Quizz } from "@/app/common/types/common";
import { Button, SubjectSign } from "..";

type SubjectsProps = {
  data: Quizz[];
  onSelectQuiz: (quiz: Quizz) => void;
};

const Subjects = ({ data, onSelectQuiz }: SubjectsProps) => {

  return (
    <>
      {data.map((subject) => (
        <Button
          key={subject.title}
          className=""
          onClick={() => {
            const selectedQuiz = data.find(
              (quiz) => quiz.title === subject.title
            );
            if (selectedQuiz) {
              onSelectQuiz(selectedQuiz);
            }
          }}
        >
          <SubjectSign title={subject.title} icon={subject.icon} />
        </Button>
      ))}
    </>
  );
};

export default Subjects;
