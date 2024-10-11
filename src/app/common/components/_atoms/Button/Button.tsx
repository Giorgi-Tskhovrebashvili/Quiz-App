import { ButtonType } from "../../../types";

const Button = ({ onClick, className, children, disabled }: ButtonType) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
