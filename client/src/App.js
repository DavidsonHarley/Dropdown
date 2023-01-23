import { Route, Routes } from 'react-router-dom';
import styles from './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dropdown />} />
    </Routes>

  );
}

export default App;
