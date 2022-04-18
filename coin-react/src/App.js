import './App.css';

// react router-dom 사용 //
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import YoutuberPage from './components/YoutuberPage/YoutuberPage';
import AdminPage from './components/AdminPage/AdminPage';
import LoginPage2 from './components/LoginPage/LoginPage2';
import SignUpPage from './components/RegisterPage/SignUpPage';
import NotYoutuber from './components/AdminPage/NotYoutuber';
import * as app from './commons/firebase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage2 />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/youtuber" element={<YoutuberPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dev" element={<NotYoutuber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
