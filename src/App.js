import React from "react";
import { useCallback, useRef } from "react";
import { useState } from "react";
import "./styles.css";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

export default function App() {
  /* 초기값 설정 */
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 시작하기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트, 훅 사용하기",
      checked: true,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      checked: false,
    },
  ]);

  /* 할 일 생성 */
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  /* id 로 삭제 */
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onUpdate = (id, text) => {
    /* 팝업창 꺼줌 */
    onInsertToggle();

    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoInsert onInsert={onInsert} />
      {insertToggle && (
        <TodoEdit
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onInsertToggle={onInsertToggle}
        />
      )}
    </div>
  );
}
