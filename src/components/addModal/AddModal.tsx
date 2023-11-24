import React, { useState } from 'react';
// import { Icon } from '@iconify/types';

import { AddModalProps } from './AddModal.types';

import './AddModal.css';

export const AddModal = ({
  setIsModalOpen,
  todoData,
  setTodoData,
  setIsLoading,
}: AddModalProps) => {
  const [addInputs, setAddInputs] = useState({
    userId: '',
    title: '',
    completed: '',
  });

  const handleInputChange = (e: any) => {
    setAddInputs({
      ...addInputs,
      [e.target.name]: e.target.value,
    });
  };

  // save
  const handleSave = (e: any) => {
    e.preventDefault();

    const newData = {
      id: todoData.length + 1,
      userId: parseInt(addInputs?.userId),
      title: addInputs?.title,
      completed: addInputs?.completed == 'Yes' ? true : false,
    };
    setTodoData([newData, ...todoData]);
    setIsModalOpen(false);
    setIsLoading(true);
  };

  return (
    <div className='modal'>
      <div className='modal-bg' onClick={() => setIsModalOpen(false)}></div>
      <div className='modal-box'>
        <div className='modal-flex'>
          <h1 className='modal-header'>Add Modal</h1>
          {/* <Icon
            onClick={() => setIsModalOpen(false)}
            className='modal-icon'
            icon='ph:x-bold'
          /> */}
          <i onClick={() => setIsModalOpen(false)} className='modal-icon'>
            Cancel
          </i>
        </div>

        <form onSubmit={handleSave}>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>UserId</label>
            <select
              onChange={(e) => handleInputChange(e)}
              name='userId'
              className='modal-input'
              required
            >
              <option value=''>--no-options</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>Title</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name='title'
              className='modal-input'
              type='text'
              required
            />
          </div>
          <div className='modal-input-wrap'>
            <label className='modal-input-title'>Completed</label>
            <select
              onChange={(e) => handleInputChange(e)}
              name='completed'
              className='modal-input'
              required
            >
              <option value=''>--no-options</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <button className='modal-btn' type='submit'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
