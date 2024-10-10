import Image from "next/image";
import { backgroundColors } from "../../utils/utils";
import { SubjectSignType } from "../../types";

const SubjectSign = ({ title, icon, className }: SubjectSignType) => {
  return (
    <div className={className}>
      <div
        className="p-2 rounded-lg w-[40px] h-[40px]"
        style={{ backgroundColor: backgroundColors[title] }}
      >
        <Image
          src={icon}
          alt={"Subject icon"}
          width={30}
          height={30}
          className=""
        />
      </div>
      <p className="text-[18px] not-italic font-medium leading-[18px] md:text-[28px] md:leading-[28px]">
        {title}
      </p>
    </div>
  );
};

export default SubjectSign;
