import { useState, useEffect, useCallback } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(() => {
    fetch('/api/tasks', {
      headers: {
        Authorization: 'Bearer abc',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setTasks(jsonData.tasks);
      });
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTaskHandler = (task) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer abc',
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((resData) => {
        console.log(resData);
      });
  };

  return (
    <div className="App">
      <section>
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section>
        <button onClick={fetchTasks}>Fetch Tasks</button>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
};

export default App;
