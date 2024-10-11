import { ProgressType } from "../../../types";

const Progress = ({ currentIndex, total }: ProgressType) => {
  const progressPercentage = (currentIndex / total) * 100;

  return (
    <div className="Progress w-full h-[16px] p-[4px] rounded-full">
      <div
        className="h-full bg-purple transition-all rounded-full"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default Progress;
