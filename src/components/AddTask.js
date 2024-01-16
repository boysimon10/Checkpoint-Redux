import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  // Fonction appelée lors du clic sur le bouton "Add"
  const handleAddTask = () => {
    // Vérifie si la description n'est pas vide
    if (description.trim() !== '') {
      // Dispatch de l'action pour ajouter une nouvelle tâche avec les données fournies
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      
      // Réinitialise la valeur de la description à une chaîne vide après l'ajout
      setDescription('');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">ToDo App</h1>
      <div className="mt-4 flex">
        <input
          className="w-80 border-b-2 border-gray-500 text-black"
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
          onClick={handleAddTask}
        >
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>

          <span>Ajouter</span>
        </button>
      </div>
    </div>
  );
};

export default AddTask;
