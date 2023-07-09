import { Mail } from "lucide-react";
import { useRef } from "react";

const Button = () => {
  const buttonRef = useRef(null);

  const onFocus = async () => {
    await setTimeout(() => {
      buttonRef.current.blur();
    }, 300);
  };

  return (
    <button
      ref={buttonRef}
      onFocus={onFocus}
      className="border-sky-400 border border-1 py-2 px-4 rounded-lg flex gap-2 select-none duration-200 shadow-custom focus:shadow-customFocus -translate-x-1 -translate-y-1 focus:translate-x-0 focus:translate-y-0 hover:bg-slate-50"
    >
      <Mail className="h-4 w-4 m-auto" />
      Newsletter
    </button>
  );
};

export default Button;
