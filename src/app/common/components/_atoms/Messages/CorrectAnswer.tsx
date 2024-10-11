import Image from "next/image";

const CorrectAnswer = () => {
  return (
    <div>
      <Image
        src={"/assets/images/icon-correct.svg"}
        alt="correct"
        width={40}
        height={40}
        className=""
      />
    </div>
  );
};

export default CorrectAnswer;
