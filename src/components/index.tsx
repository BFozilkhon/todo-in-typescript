import { useEffect, useState } from 'react';

import { Table } from './table/Table';
import { TodoScheme } from './TodoScheme.types';
import { AddModal } from './addModal/AddModal';
import { TopBar } from './topBar/TopBar';

import classes from './index.module.css';
import { EditModal } from './editModal/EditModal';

export const Crud = () => {
  const [todoData, setTodoData] = useState<TodoScheme[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editChoosingId, setEditChoosingId] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        setTodoData(res?.slice(0, 10));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <div className={classes['crud-container']}>
      <TopBar
        setIsModalOpen={setIsModalOpen}
        setIsLoading={setIsLoading}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      <Table
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setTodoData={setTodoData}
        todoData={todoData}
        setIsModalOpen={setIsModalOpen}
        setEditChoosingId={setEditChoosingId}
      />
      {isModalOpen && (
        <AddModal
          setIsLoading={setIsLoading}
          setTodoData={setTodoData}
          todoData={todoData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen && (
        <EditModal
          setIsLoading={setIsLoading}
          setTodoData={setTodoData}
          todoData={todoData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          editChoosingId={editChoosingId}
        />
      )}
    </div>
  );
};
