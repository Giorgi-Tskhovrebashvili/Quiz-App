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
        "transition-all duration-500 flex justify-center items-start"
      )}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
