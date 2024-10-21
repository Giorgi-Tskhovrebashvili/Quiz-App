"use client";
import { SubjectsProps } from "@/app/common/types/common";
import { Button, SubjectSign } from "../..";

const Subjects = ({ data, onSelectQuiz }: SubjectsProps) => {
  return (
    <div className="flex flex-col items-start gap-[12px] w-[327px] md:w-[640px] md:gap-[24px] xl:w-[564px]">
      {data.map((subject) => (
        <Button
          key={subject.title}
          className="flex items-center p-[12px] w-[327px] h-[64px] rounded-[12px] bg-white shadow-lg ring-1 hover:ring-purple transition-all md:w-[640px] md:h-[80px] md:rounded-[24px] xl:w-[564px] xl:p-[20px] xl:h-[96px]"
          onClick={() => {
            const selectedQuiz = data.find(
              (quiz) => quiz.title === subject.title
            );
            if (selectedQuiz) {
              onSelectQuiz(selectedQuiz);
            }
          }}
        >
          <SubjectSign
            title={subject.title}
            icon={subject.icon}
            className={"flex gap-[16px] items-center md:gap-[32px]"}
          />
        </Button>
      ))}
    </div>
  );
};

export default Subjects;
