import React from "react";
import cn from "classnames";
import {
  MdRemoveCircleOutline,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
} from "react-icons/md";

function TodoListItem({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
}) {
  const { id, text, checked } = todo;
  return (
    <li className="TodoListItem">
      <div
        className={cn("checkbox", { checked: checked })}
        onClick={() => onToggle(id)}
      >
        {/* checked=true면 체크된 박스 아이콘, false면 빈 박스 아이콘 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="edit"
        onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}
      >
        <MdModeEditOutline />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
}

export default TodoListItem;
