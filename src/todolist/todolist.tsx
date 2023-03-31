import styles from "./todolist.module.css";
import words from "../words.json";
import TodoRow from "../components/todoRow/todoRow";
import TableHeader from "./tableHeader";
import { useCallback, useState } from "react";

interface ITodolist {
  name: string;
  id: number;
  productId: string;
  active: boolean;
  selected: boolean;
}

const Todolist = () => {
  const [todolists, setTodolist] = useState<Array<ITodolist>>([]);

  const createTodo = () => {
    setTodolist(
      [
        {
          name: "",
          id: todolists.length + 1,
          productId: "",
          active: false,
          selected: false,
        },
      ].concat(todolists)
    );
  };

  const deleteSelectedTodo = () => {
    if (window.confirm(words.deleteQuestion)) {
      setTodolist(todolists.filter((todo) => !todo.selected));
    }
  };

  const deleteTodo = useCallback(
    (id: number) => {
      if (window.confirm(words.deleteQuestion)) {
        setTodolist(todolists.filter((todo) => todo.id !== id));
      }
    },
    [todolists]
  );

  const setTodoValue = (callback: (todo: ITodolist) => ITodolist) => {
    setTodolist(todolists.map(callback));
  };

  const setActive = useCallback(
    (id: number, value: boolean) =>
      setTodolist(
        todolists.map((todo) => {
          if (todo.id === id) {
            todo.active = value;
            todo.selected = false;
          }
          return todo;
        })
      ),
    [todolists]
  );

  const setName = useCallback(
    (id: number, value: string) =>
      setTodoValue((todo) => {
        if (todo.id === id) todo.name = value;
        return todo;
      }),
    [todolists]
  );

  const setProductId = useCallback(
    (id: number, value: string) =>
      setTodoValue((todo) => {
        if (todo.id === id) todo.productId = value;
        return todo;
      }),
    [todolists]
  );

  const setSelect = useCallback(
    (id: number) =>
      setTodoValue((todo) => {
        if (todo.id === id && !todo.active) todo.selected = !todo.selected;
        return todo;
      }),
    [todolists]
  );

  return (
    <main className={styles.todolist}>
      <h2 className={styles.title}>{words.title}</h2>
      <table className={styles.table}>
        <TableHeader onCreate={createTodo} onDelete={deleteSelectedTodo} />
        {todolists.length !== 0 &&
          todolists.map((todo, i) => (
            <TodoRow
              key={todo.id}
              isActive={todo.active}
              name={todo.name}
              selected={todo.selected}
              id={todo.productId}
              onSelect={() => setSelect(todo.id)}
              onActive={(value) => setActive(todo.id, value)}
              onChangeName={(value) => setName(todo.id, value)}
              onChangeProductId={(value) => setProductId(todo.id, value)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
      </table>
      {!todolists.length && <div className={styles.empty}>{words.isEmpty}</div>}
    </main>
  );
};

export default Todolist;
