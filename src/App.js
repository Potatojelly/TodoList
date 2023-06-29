
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from "./components/Header/Header"
import { useState } from 'react';


const filters = ["all","active","completed"];
function App() {
  const [filter,setFilter] = useState(filters[0]);
  const handleFilter = (filter) => {
    setFilter(filter);
  }
  return (
    <div className="App">
      <Header filters={filters} filter={filter} onFilterChange={handleFilter}/>
      <TodoList filter={filter}/>
    </div>
  );
}

export default App;
