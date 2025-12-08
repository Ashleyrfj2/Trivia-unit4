import { useState, useEffect } from 'react';
import Modal from './components/shared/modal.jsx';
import GamePlay from './pages/GameplayPage/Gameplay';
import { Route, Routes } from 'react-router-dom';
import Settings from './pages/SettingsPage/Settings.jsx';
import "./App.css"
import EndGame from './pages/EndGamePage/EndGame.jsx';
import Navbar from './components/shared/navbar.jsx';
const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState(() => {
    // Load username from localStorage on initial load
    const savedUserName = localStorage.getItem('trivia_userName');
    return savedUserName || '';
  });

  useEffect(() => {
    // Save username to localStorage whenever it changes
    if (userName) {
      localStorage.setItem('trivia_userName', userName);
      setShowModal(false);
    }
  }, [userName]);

  const handleUsernameSubmit = (username) => {
    setUserName(username);
  };



  return (
    <>
      <Navbar userName={userName} />
      <Routes>
        <Route path="/" element = {<Settings userName={userName}/>}/>
        <Route path="/login" element={<Modal userNameLogIn={handleUsernameSubmit} setLoginModal={setShowModal}/>}/>
        <Route path="/play" element={<GamePlay userName={userName}/>} />
        <Route path="/play/:category/:difficulty" element={<GamePlay userName={userName}/>} />
        <Route path="/play/placeholder" element={<EndGame userName={userName}/>}/>
      </Routes>
      {showModal && (
        <div className="modal-overlay">
          <Modal userNameLogIn={handleUsernameSubmit} setLoginModal={setShowModal} />
        </div>
      )}
    </>
  );
};

export default App;
