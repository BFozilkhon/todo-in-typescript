import { useEffect, useState } from 'react';

import './TopBar.css';
import { TopBarProps } from './TopBar.types';

export const TopBar = ({
  todoData,
  setTodoData,
  setIsLoading,
  setIsModalOpen,
}: TopBarProps) => {
  const [searchText, setSearchText] = useState('');

  const handleInputKeyDown = (e: any) => {
    const newData = todoData.filter((value) =>
      value?.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    if (e.key == 'Enter') {
      setTodoData(newData);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (searchText == '') {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((res) => {
          setTodoData(res?.slice(0, 10));
          setIsLoading(true);
        });
    }
  }, [searchText]);

  return (
    <div className='topbar-container'>
      <h1 className='topbar-header'>Manage Todos</h1>
      <div className='topbar-box'>
        <button onClick={() => setIsModalOpen(true)} className='topbar-btn'>
          Add Todo
        </button>
        <input
          className='topbar-input'
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(e)}
          type='text'
          placeholder='Search todos'
        />
      </div>
    </div>
  );
};
