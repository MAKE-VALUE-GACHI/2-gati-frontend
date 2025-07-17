import { IButtonProps } from "@interface/Common";

const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-6 p-2 bg-main text-white font-bold text-lg rounded"
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
