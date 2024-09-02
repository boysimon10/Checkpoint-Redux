import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, setFilter } from '../actions';
import Task from './Task';

const ListTask = () => {
  // Sélection des tâches en fonction du filtre actuel
  const tasks = useSelector((state) => {
    switch (state.filter) {
      case 'done':
        return state.tasks.filter((task) => task.isDone);
      case 'notDone':
        return state.tasks.filter((task) => !task.isDone);
      default:
        return state.tasks;
    }
  });

  const dispatch = useDispatch();

  // Fonction pour basculer l'état d'une tâche
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  // Fonction pour définir le filtre des tâches à afficher
  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <div className="mt-8">
        <button onClick={() => handleSetFilter('all')} className="border-2 border-gray-500 p-2">
          Toutes
        </button>
        <button onClick={() => handleSetFilter('notDone')} className="border-2 border-green-500 p-2 ml-2">
          En cours
        </button>
        <button onClick={() => handleSetFilter('done')} className="border-2 border-red-500 p-2 ml-2">
        Terminée
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
