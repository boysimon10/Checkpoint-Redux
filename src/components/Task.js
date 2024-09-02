import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../actions';

const Task = ({ task, onToggle }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  // Fonction appelée lors du clic sur le bouton "Save" pour éditer la tâche
  const handleEditTask = () => {
    dispatch(editTask({ ...task, description: editedDescription }));
    setIsEditing(false);
  };

  // Fonction appelée lors du clic sur le bouton "Remove" pour supprimer la tâche
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className="p-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-6 w-6"
            value="true"
            checked={task.isDone}
            onChange={() => onToggle(task.id)}
          />
          <div className="ml-2">
            {isEditing ? (
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="border-b-2 border-gray-500 text-black"
              />
            ) : (
              <p className={`text-lg ${task.isDone ? 'line-through text-gray-400' : 'text-black'}`}>
                {task.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex">
          {isEditing ? (
            <button
              onClick={handleEditTask}
              className="flex text-blue-500 border-2 border-blue-500 p-2 rounded-lg ml-2"
            >
              <span>Enregistrer</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="flex text-indigo-500 border-2 border-indigo-500 p-2 rounded-lg ml-2"
              >
                <span>Editer</span>
              </button>
              <button
                onClick={handleDeleteTask}
                className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg ml-2"
              >
                <span>Supprimer</span>
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export default Task;