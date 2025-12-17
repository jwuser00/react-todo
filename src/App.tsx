import './App.css'
import TodoList from './components/todolist';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <TodoList />
    </DarkModeProvider>
  )
}

export default App
