import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="bg-white p-3 max-w-md mx-auto">
            <AddTask />
            <ListTask />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
