"use client";
import { SwitchTheme } from "../..";

const Header = () => {
  return (
    <div className="flex w-[327px] mx-[24px] my-[16px] justify-between items-start md:w-[640px] md:mx-[64px] md:my-[40px] xl:mx-[30px] xl:my-[83px] xl:w-[1157px]">
      <div></div>
      <SwitchTheme />
    </div>
  );
};

export default Header;
