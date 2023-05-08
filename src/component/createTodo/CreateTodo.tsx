import React, { useState } from 'react'
import { CreateTodoStateType } from './CreateTodo.interface'

const CreateTodo = () => {

  const [inputCreateTodo, setInputCreateTodo] = useState<CreateTodoStateType>({
    title: '',
    desc: '',
  })
  const onChangeCreateTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setInputCreateTodo({...inputCreateTodo, [event.target.name]: event.target.value})
  }

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
    </div>
  )
}

export default CreateTodo
