import Image from "next/image";

const SubmitError = () => {
  return (
    <p className="flex items-center gap-[8px] text-[18px] not-italic font-normal leading-[18px] md:text-[24px] md:leading-[36px]">
      <Image
        src={"/assets/images/icon-error.svg"}
        alt="error"
        width={40}
        height={40}
        className=""
      />
      Please select an answer
    </p>
  );
};

export default SubmitError;
