import { useCallback, useEffect, useState } from "react";

function TodoEdit({
  selectedTodo,
  onUpdate,
  onChangeSelectedTodo,
  onInsertToggle,
}) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue(""); /* value 초기화 */
      e.preventDefault();
    },
    [onUpdate, value]
  );

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div className="backgroud">
      <form onSubmit={onSubmit} className="todoEditInsert">
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
