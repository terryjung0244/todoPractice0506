import { Reducer } from 'redux';
import { TodoReducerState } from 'service/redux/todoReducer/todoReducer.interface';
import { TodoActionsType } from 'service/redux/todoAction.interface';

const initialState: TodoReducerState = {
  // todoList: []
};

const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  switch (action.type) {
    case 'CREATE_TODO':
      return { ...state }
    default:
      return state;
  }
};

export default todoReducer;
