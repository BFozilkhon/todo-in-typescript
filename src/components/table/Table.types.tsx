import { Dispatch, SetStateAction } from 'react';
import { TodoScheme } from '../TodoScheme.types';

export type TableProps = {
  todoData: TodoScheme[];
  setTodoData: Dispatch<SetStateAction<TodoScheme[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditChoosingId: Dispatch<SetStateAction<number | null>>;
};
