import { memo } from "react";
import styles from "./button.module.css";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = memo(({ children, onClick }: IButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
));

export default Button;
