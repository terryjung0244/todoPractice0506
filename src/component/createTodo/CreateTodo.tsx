import React, { useState } from 'react'
import { CreateTodoType } from './CreateTodo.interface'
import { useAppDispatch, useAppSelector } from 'service/store'
import { createTodoAction } from 'service/redux/todoAction/todoAction'
import { getNanoId } from 'service/util/nanoid'

const CreateTodo = () => {

  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer)

  const [inputCreateTodo, setInputCreateTodo] = useState<CreateTodoType>({
    title: '',
    desc: '',
  })
  
  const onChangeCreateTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputCreateTodo({...inputCreateTodo, [event.target.name]: event.target.value})
  }

  const onClickForInputCreateTodo = (inputCreateTodo: CreateTodoType) => {
    const {title, desc} = inputCreateTodo;
    if(!title || !desc) {
      alert('Fill in the blank')
      return;
    }

    // const todoId = getNanoId(); // 이거보단 아래에 바로 넣는게, 메모리 효율에 좋다.
    
    dispatch(createTodoAction({...inputCreateTodo, id: getNanoId()}))
  }

  console.log(todoList)

  return (
    <div>
      <input
        name='title'
        value={inputCreateTodo.title}
        placeholder='Title'
        onChange={onChangeCreateTodo}
      />
      <input
        name='desc'
        value={inputCreateTodo.desc}
        placeholder='Description'
        onChange={onChangeCreateTodo}
      />
      <button onClick={() => onClickForInputCreateTodo(inputCreateTodo)}>Button</button>
    </div>
  )
}

export default CreateTodo
