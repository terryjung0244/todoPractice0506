import React, { useState } from "react";
import { CreateTodoType } from "./CreateTodo.interface";
import { useAppDispatch, useAppSelector } from "service/store";
import { createTodoAction } from "service/redux/todoAction/todoAction";
import { getNanoId } from "service/util/nanoid";
import { TodoType } from "service/model/todo";
import "./CreateTodo.css";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const [inputCreateTodo, setInputCreateTodo] = useState<CreateTodoType>({
    title: "",
    desc: "",
  });

  const onChangeCreateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateTodo({
      ...inputCreateTodo,
      [event.target.name]: event.target.value,
    });
  };

  const onClickForInputCreateTodo = (inputCreateTodo: CreateTodoType) => {
    const { title, desc } = inputCreateTodo;
    if (!title || !desc) {
      alert("Fill in the blank");
      return;
    }

    // const todoId = getNanoId(); // 이거보단 아래에 바로 넣는게, 메모리 효율에 좋다.

    dispatch(createTodoAction({ ...inputCreateTodo, id: getNanoId() }));
    setInputCreateTodo({ ...inputCreateTodo, title: "", desc: "" }); // 초기화
  };

  const onChangeTodoCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  return (
    <div>
      <input
        name="title"
        value={inputCreateTodo.title}
        placeholder="Title"
        onChange={onChangeCreateTodo}
      />
      <input
        name="desc"
        value={inputCreateTodo.desc}
        placeholder="Description"
        onChange={onChangeCreateTodo}
      />
      <button onClick={() => onClickForInputCreateTodo(inputCreateTodo)}>
        Button
      </button>
      <div>
        {todoList.length > 0 && (
          <div>
            <table className="table-container ">
              <thead>
                <tr className="th-row">
                  <th className="th-checkbox">
                    <input type="checkbox" />
                  </th>
                  <th className="th-title">TITLE</th>
                  <th className="th-detail">DETAIL</th>
                </tr>
              </thead>
              <tbody>
                {todoList.map((todo: TodoType) => {
                  return (
                    <tr key={todo.id} className="tb-row">
                      <td className="td-checkbox">
                        <input
                          type="checkbox"
                          value={todo.id}
                          onChange={onChangeTodoCheckBox}
                        />
                      </td>
                      <td className="td-detail">{todo.desc}</td>
                      <td className="td-title">{todo.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
