import Image from "next/image";

const IncorrectAnswer = () => {
  return (
    <div>
      <Image
        src={"/assets/images/icon-incorrect.svg"}
        alt="incorrect"
        width={40}
        height={40}
        className=""
      />
    </div>
  );
};

export default IncorrectAnswer;
