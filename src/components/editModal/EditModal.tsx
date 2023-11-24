import React, { useEffect, useState } from 'react';
// import { Icon } from '@iconify/types';

import { EditModalProps } from './EditModal.types';

import './EditModal.css';
import { TodoScheme } from '../TodoScheme.types';

export const EditModal = ({
  setIsModalOpen,
  todoData,
  setTodoData,
  setIsLoading,
  editChoosingId,
}: EditModalProps) => {
  const [oneTodo, setOneTodo] = useState<TodoScheme>({} as TodoScheme);
  const [editInputs, setEditInputs] = useState({
    userId: '',
    title: '',
    completed: '',
  });

  useEffect(() => {
    const filtered = todoData.filter((value) => value?.id == editChoosingId);
    setOneTodo(filtered[0]);
  }, [editChoosingId]);

  useEffect(() => {
    setEditInputs({
      userId: oneTodo.id + '',
      title: oneTodo.title,
      completed: oneTodo.completed ? 'Yes' : 'No',
    });
  }, [oneTodo]);

  const handleInputChange = (e: any) => {
    setEditInputs({
      ...editInputs,
      [e.target.name]: e.target.value,
    });
  };

  // save
  const handleEdit = (e: any) => {
    e.preventDefault();

    const newData = {
      id: todoData.length + 1,
      userId: parseInt(editInputs?.userId),
      title: editInputs?.title,
      completed: editInputs?.completed == 'Yes' ? true : false,
    };
    const editedData = todoData.map((value) => {
      return value?.id == editChoosingId ? newData : value;
    });

    setTodoData(editedData);
    setIsModalOpen(false);
    setIsLoading(true);
  };

  return (
    <div className='modal'>
      <div className='modal-bg' onClick={() => setIsModalOpen(false)}></div>
      <div className='modal-box'>
        <div className='modal-flex'>
          <h1 className='modal-header'>Edit Modal</h1>
          {/* <Icon
            onClick={() => setIsModalOpen(false)}
            className='modal-icon'
            icon='ph:x-bold'
        /> */}
          <i onClick={() => setIsModalOpen(false)} className='modal-icon'>
            Cancel
          </i>
        </div>
        <h2>{oneTodo?.id} todo</h2>

        <form onSubmit={handleEdit}>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>UserId</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='title'
              className='modal-input disabled'
              type='text'
              required
              value={oneTodo?.id}
              disabled
            />
          </div>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>Title</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='title'
              className='modal-input'
              type='text'
              required
              value={editInputs?.title}
            />
          </div>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>Completed</label>
            <select
              onChange={(e) => handleInputChange(e)}
              name='completed'
              className='modal-input'
              required
              value={editInputs?.completed}
            >
              <option value=''>--no-options</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <button className='modal-btn' type='submit'>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
