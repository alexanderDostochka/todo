import styles from "./todolist.module.css";
import words from "../words.json";
import TodoRow from "../components/todoRow/todoRow";

const Todolist = () => {
  return (
    <main className={styles.todolist}>
      <h2 className={styles.title}>{words.title}</h2>
      <table className={styles.table}>
        <tr>
            <th>
                Status
            </th>
            <th>
                Product
            </th>
            <th>
                Id
            </th>
            <th>
                Name
            </th>
            <th>
                <button>+</button>
                <button>x</button>
            </th>
        </tr>
        <TodoRow isActive={false} name="Test Works" id={10} />
        <TodoRow isActive={true} name="Test Works2" id={10} />
      </table>
    </main>
  );
};

export default Todolist;
