import { Dispatch, SetStateAction } from 'react';
import { TodoScheme } from '../TodoScheme.types';

export type AddModalProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  todoData: TodoScheme[];
  setTodoData: Dispatch<SetStateAction<TodoScheme[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
