import { Header } from "..";

interface MainLayoutType {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="flex gap-5">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
