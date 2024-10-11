const StartInfo = () => {
  return (
    <div className="flex flex-col items-start gap-[16px] md:w-[465px] xl:gap-[48px]">
      <h1 className="flex flex-col gap-[8px] text-[40px] not-italic font-light	leading-[40px] md:text-[64px] md:leading-[64px]">
        Welcome to the{" "}
        <span className="font-medium	md:text-[64px] md:leading-[64px]">
          Frontend Quiz!
        </span>
      </h1>
      <p className="text-[#ABC1E1] text-[14px] italic font-normal leading-[21px] md:text-[20px] md:leading-[30px]">
        Pick a subject to get started.
      </p>
    </div>
  );
};

export default StartInfo;
