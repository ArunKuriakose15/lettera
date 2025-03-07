import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Letter from './components/Letter';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedRoute />} >
          <Route path='/editor' element={<Letter />} />
          </Route>
          <Route path="*" element={< NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
