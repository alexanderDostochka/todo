import { memo } from 'react';
import Switch from '../switch/switch';
import styles from './todoRow.module.css';

interface ITodoRowProps {
    isActive: boolean,
    product?: string,
    id: number,
    name: string
};

const TodoRow = memo(({
    isActive,
    id,
    name,
    product = "xxxx",
}: ITodoRowProps) => {
    return (
        <tr className={styles.todoRow}>
            <td>
                <Switch />
            </td>
            <td>
                {`${product}-`}
            </td>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                X
            </td>
        </tr>
    );
});

export default TodoRow;