import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";

interface ButtonProps {
  content: string;
  handleClick: () => void;
  variant?: "default" | "green" | "link";
  className?: string;
}

const buttonVariants = cva(
  "bg-transparent text-white font-bold text-xs uppercase text-center tracking-widest",
  {
    variants: {
      variant: {
        default:
          "border border-white rounded-[30px] px-8 py-3 hover:bg-white hover:text-black",
        green: "rounded-full hover:bg-offGreen bg-green py-3 px-8",
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
