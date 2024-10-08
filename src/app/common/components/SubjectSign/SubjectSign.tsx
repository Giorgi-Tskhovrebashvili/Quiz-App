import Image from "next/image";
import { backgroundColors } from "../../utils/utils";

interface SubjectSignType {
    title: string;
    icon: string;
}

const SubjectSign = ({ title, icon }: SubjectSignType) => {
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <div
        className="p-2 rounded-lg w-[40px] h-[40px]"
        style={{ backgroundColor: backgroundColors[title] }}
      >
        <Image
          src={icon}
          alt={'Subject icon'}
          width={30}
          height={30}
          className=""
        />
      </div>
      <p className="font-bold xs:text-xl md:text-2xl">{title}</p>
    </div>
  );
};

export default SubjectSign;
