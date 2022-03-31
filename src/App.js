import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </>
  );
}

export default App;
