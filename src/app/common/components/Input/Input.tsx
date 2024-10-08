interface InputType {
  type: "text" | "checkbox";
  id: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, className, id, onChange }: InputType) => {
  return (
    <input id={id} type={type} className={className} onChange={onChange} />
  );
};

export default Input;
