interface ButtonType {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean | undefined;
}

const Button = ({ onClick, className, children, disabled }: ButtonType) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
