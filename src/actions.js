// Action pour ajouter une nouvelle tâche
export const addTask = (task) => ({
  type: 'ADD_TASK',     // Type d'action pour ajouter une tâche
  payload: task,        // Données associées à l'action (la tâche à ajouter)
});

// Action pour basculer l'état d'une tâche (faite ou non faite)
export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',  // Type d'action pour basculer l'état d'une tâche
  payload: taskId,      // Données associées à l'action (l'ID de la tâche)
});

// Action pour éditer une tâche existante
export const editTask = (task) => ({
  type: 'EDIT_TASK',    // Type d'action pour éditer une tâche
  payload: task,        // Données associées à l'action (la tâche éditée)
});

// Action pour supprimer une tâche
export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',  // Type d'action pour supprimer une tâche
  payload: taskId,      // Données associées à l'action (l'ID de la tâche à supprimer)
});

// Action pour définir un filtre sur les tâches (ex. 'all', 'done', 'notDone')
export const setFilter = (filter) => ({
  type: 'SET_FILTER',   // Type d'action pour définir un filtre
  payload: filter,      // Données associées à l'action (le filtre à appliquer)
});
