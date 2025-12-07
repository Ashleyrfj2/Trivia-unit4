import { useState, useEffect } from 'react';
import Modal from './components/modal.jsx';
import GamePlay from './components/gameplay/main';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/settings/settings';
import "./App/App.css"
import EndGame from './components/EndGame.jsx';
import Navbar from './components/navbar.jsx';
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
        <Route path="/login" element={<Modal userNameLogIn={handleUsernameSubmit}/>}/>
        <Route path="/play" element={<GamePlay userName={userName}/>} />
        <Route path="/play/:category/:difficulty" element={<GamePlay userName={userName}/>} />
        <Route path="/play/placeholder" element={<EndGame userName={userName}/>}/>
      </Routes>
      {showModal && (
        <div className="modal-overlay">
          <Modal userNameLogIn={handleUsernameSubmit} />
        </div>
      )}
    </>
  );
};

export default App;
