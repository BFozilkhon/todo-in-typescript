import { useState } from 'react';

import { TableProps } from './Table.types';
import { Loader } from '../loader/Loader';

import './Table.css';

export const Table = ({
  todoData,
  setTodoData,
  isLoading,
  setIsLoading,
  setIsModalOpen,
  setEditChoosingId,
}: TableProps) => {
  const [copyClickedId, setCopyClickedId] = useState<number | null>(null);
  // delete
  const handleDelete = (id: number) => {
    const newData = todoData?.filter((value) => value?.id !== id);
    setIsLoading(true);
    setTodoData(newData);
  };

  // edit
  const handleEditBtnClicked = (id: number) => {
    setIsModalOpen(true);
    setEditChoosingId(id);
  };

  // copy
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyClickedId(null);
  };

  return (
    <table className='table-container'>
      <thead>
        <tr>
          <td className='table-headers'>UserId</td>
          <td className='table-headers'>Title</td>
          <td className='table-headers'>Completion Status</td>
          <td className='table-headers'>Actions</td>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <Loader />
        ) : (
          todoData?.map((value, index) => {
            return (
              <tr>
                <td className='table-items'>{index + 1}</td>
                <td
                  onClick={() => setCopyClickedId(value.id)}
                  className='table-items items-copy'
                >
                  <div onClick={() => setCopyClickedId(value.id)}>
                    {value?.title}
                  </div>
                  {copyClickedId == value.id && (
                    <div
                      onClick={() => handleCopy(value.title)}
                      className='copy'
                    >
                      copy
                    </div>
                  )}
                </td>
                <td className='table-items'>
                  {value?.completed ? (
                    <div className='table-status status-finished'>done</div>
                  ) : (
                    <div className='table-status status-unfinished'>undone</div>
                  )}
                </td>
                <td className='table-items'>
                  <button
                    onClick={() => handleEditBtnClicked(value.id)}
                    className='table-btn edit'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(value?.id)}
                    className='table-btn delete'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};
