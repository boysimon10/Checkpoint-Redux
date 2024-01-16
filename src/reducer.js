// État initial du Redux
const initialState = {
  tasks: [],         // Liste des tâches
  filter: 'all',     // Filtre pour afficher toutes les tâches, les tâches faites ou non faites
};

// Reducer pour gérer les actions et mettre à jour l'état Redux
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Ajoute une nouvelle tâche à la liste des tâches existantes
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'TOGGLE_TASK':
      // Bascule l'état (fait ou non fait) d'une tâche spécifique
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case 'EDIT_TASK':
      // Édite une tâche existante en remplaçant la tâche avec les nouvelles données
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case 'DELETE_TASK':
      // Supprime une tâche de la liste des tâches
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'SET_FILTER':
      // Définit le filtre pour afficher les tâches selon certaines conditions
      return {
        ...state,
        filter: action.payload,
      };

    default:
      // Retourne l'état inchangé si l'action n'est pas reconnue
      return state;
  }
};

export default reducer;