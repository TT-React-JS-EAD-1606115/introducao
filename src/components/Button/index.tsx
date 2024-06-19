import "./styles.css";

interface ButtonProps {
  children: React.ReactNode;
  blue?: boolean;
}

export function Button({ children, blue }: ButtonProps) {
  return <button>{children}</button>;
}
