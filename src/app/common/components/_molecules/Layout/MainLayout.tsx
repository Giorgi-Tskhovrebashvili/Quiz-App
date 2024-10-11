import { Header } from "../..";
import { MainLayoutType } from "../../../types";

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="flex flex-col items-center min-h-screen w-[375px] md:w-[768px] xl:w-[1440px]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
