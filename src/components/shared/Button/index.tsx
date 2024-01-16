type Props = {
  children: React.ReactNode | string | number;
  className?: string;
} & React.ComponentProps<"button">;

const Button = ({ children, onClick, className, ...props }: Props) => {
  return (
    <button
      className={`border px-4 py-1 rounded-md border-sky-400 bg-sky-200 shadow-md shadow-black/20 hover:scale-105 hover:brightness-75 transition-all duration-200 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
