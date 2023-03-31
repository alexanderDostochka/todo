import classNames from "classnames";
import { KeyboardEvent, memo, useRef } from "react";
import CloseSVG from "../../svg/close";
import Switch from "../switch/switch";
import styles from "./todoRow.module.css";

interface ITodoRowProps {
  isActive: boolean;
  product?: string;
  id: string;
  name: string;
  selected: boolean,
  onDelete: () => void;
  onSelect: () => void;
  onActive: (value: boolean) => void;
  onChangeName: (value: string) => void;
  onChangeProductId: (value: string) => void;
}

const TodoRow = memo(
  ({
    isActive,
    id,
    name,
    selected,
    product = "xxxx",
    onDelete,
    onSelect,
    onActive,
    onChangeName,
    onChangeProductId,
  }: ITodoRowProps) => {
    const nameInput = useRef<HTMLInputElement>(null);

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key === "Enter") {
        if(nameInput.current) {
          nameInput.current.focus();
        }
      }
      if (!/[0-9]/.test(event.key) || event.key.length > 3) {
        event.preventDefault();
      }
    }

    const onKeyPressName = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key === "Enter") {
        if(nameInput.current) {
          nameInput.current.blur();
        }
      }
    }

    return (
      <tr className={classNames([styles.todoRow, selected && styles.selected])} onClick={onSelect}>
        <td>
          <Switch onChange={onActive} isActive={isActive} />
        </td>
        <td>{`${product}-`}</td>
        <td>
          <input
            type="text"
            className={styles.input}
            maxLength={3}
            onKeyPress={onKeyPress}
            disabled={isActive}
            readOnly={isActive}
            defaultValue={id}
            onChange={e => onChangeProductId(e.target.value)}
            autoFocus={true}
          />
        </td>
        <td>
          <input
            type="text"   
            ref={nameInput}
            onKeyPress={onKeyPressName}
            className={styles.input}
            disabled={isActive}
            readOnly={isActive}
            defaultValue={name}
            onChange={e => onChangeName(e.target.value)}
          />
        </td>
        <td onClick={onDelete}>
          <CloseSVG />
        </td>
      </tr>
    );
  }
);

export default TodoRow;
