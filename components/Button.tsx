import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";

interface ButtonProps {
  content: string;
  handleClick?: () => void;
  variant?: "default" | "green" | "link";
  className?: string;
}

export const buttonVariants = cva(
  "bg-transparent text-white font-bold text-xs uppercase text-center tracking-widest whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "border border-white rounded-[30px] px-5 py-3 md:px-8 hover:bg-white hover:text-black",
        green: "rounded-full hover:bg-offGreen bg-green px-5 py-3 md:px-8",
        link: "text-lightGrey underline-offset-4 hover:text-white hover:underline active:underline active:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({ content, handleClick, variant, className }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={cn(buttonVariants({ variant, className }))}
    >
      {content}
    </button>
  );
};

export default Button;
