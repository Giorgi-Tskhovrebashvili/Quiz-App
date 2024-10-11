import { InputType } from "../../../types";

const Input = ({ type, className, id, onChange }: InputType) => {
  return (
    <input id={id} type={type} className={className} onChange={onChange} />
  );
};

export default Input;
