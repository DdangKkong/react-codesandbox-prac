import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({
  todos,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
}) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onInsertToggle={onInsertToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
