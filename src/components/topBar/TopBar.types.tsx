import { Dispatch, SetStateAction } from 'react';
import { TodoScheme } from '../TodoScheme.types';

export type TopBarProps = {
  todoData: TodoScheme[];
  setTodoData: Dispatch<SetStateAction<TodoScheme[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
