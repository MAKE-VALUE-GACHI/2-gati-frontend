import { IButtonProps } from "@interface/Common";

const Button = ({ text }: IButtonProps) => {
  return (
    <button className="bg-main text-white">
      <span>{text}</span>
    </button>
  );
};

export default Button;
