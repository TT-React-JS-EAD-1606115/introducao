import "./styles.css";

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: () => void;
}

export function Button({ children, secondary, onClick }: ButtonProps) {
  return (
    <button className={secondary ? "btn-secondary" : "btn"} onClick={onClick}>
      {children}
    </button>
  );
}
