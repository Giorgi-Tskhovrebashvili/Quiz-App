const FinalInfo = () => {
  return (
    <div className="flex gap-[8px]">
      <h1 className="flex flex-col gap-[8px] text-[40px] not-italic font-light leading-[40px] md:text-[64px] md:leading-[64px]">
        Quiz completed{" "}
        <span className="font-medium md:text-[64px] md:leading-[64px]">
          You scored...
        </span>
      </h1>
    </div>
  );
};

export default FinalInfo;
