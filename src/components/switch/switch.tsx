import classNames from "classnames";
import { memo, useState } from "react";
import styles from "./switch.module.css";

interface ISwitchProps {
  isActive?: boolean;
  onChange?: (state: boolean) => void;
}

const Switch = memo(({ isActive = true, onChange }: ISwitchProps) => {
  const [active, setActive] = useState<boolean>(isActive);

  const onClick = () => {
    setActive(!active);
    if (onChange) onChange(!active);
  };

  return (
    <div
      onClick={onClick}
      className={classNames([
        styles.switch,
        active ? styles.active : styles.disactive,
      ])}
    />
  );
});

export default Switch;
