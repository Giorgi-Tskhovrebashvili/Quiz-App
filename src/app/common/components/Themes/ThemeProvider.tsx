"use client";
import { useThemeStore } from "@/app/store/ThemeStore";
import { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode } = useThemeStore();
  return (
    <div
      className={cn(
        darkMode ? "dark" : "light",
        "xs:min-h-screen lg:h-full w-full lg:overflow-hidden transition-all duration-500"
      )}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
