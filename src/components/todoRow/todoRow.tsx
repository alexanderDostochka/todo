import { memo, useState } from "react";
import Switch from "../switch/switch";
import styles from "./todoRow.module.css";

interface ITodoRowProps {
  isActive: boolean;
  product?: string;
  id: number;
  name: string;
}

const TodoRow = memo(
  ({ isActive, id, name, product = "xxxx" }: ITodoRowProps) => {
    const [inputId, setInputId] = useState<number>(id);
    const [inputName, setInputName] = useState<string>(name);

    return (
      <tr className={styles.todoRow}>
        <td>
          <Switch isActive={isActive} />
        </td>
        <td>{`${product}-`}</td>
        <td>
          <input
            type="number"
            className={styles.input}
            disabled={isActive}
            readOnly={isActive}
            defaultValue={inputId}
          />
        </td>
        <td>
          <input
            type="text"
            className={styles.input}
            disabled={isActive}
            readOnly={isActive}
            defaultValue={inputName}
          />
        </td>
        <td>X</td>
      </tr>
    );
  }
);

export default TodoRow;
