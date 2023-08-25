import { cn } from "@/libs/utils";

const Button = ({ content, handleClick, className }: { content: string, handleClick: () => void, className?: string}) => {
  return ( <button onClick={handleClick} className={cn('bg-transparent text-white border border-white rounded-[30px] px-8 py-3 font-bold text-xs uppercase text-center tracking-widest hover:bg-white hover:text-black', className)}>{content}</button> );
}
 
export default Button;