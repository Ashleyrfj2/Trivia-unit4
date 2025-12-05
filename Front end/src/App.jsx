import { useState } from 'react';
import Modal from './components/modal.jsx'; 

const App = () => {
  
  const [loginModal, setLoginModal] = useState(true);

  const [username, setUsername] = useState('');

  return (
    <div>
      
      {loginModal && (
        <Modal 
          userNameLogIn={setUsername} 
          setLoginModal={setLoginModal} 
        />
      )}

        {username && <h2>Welcome, {username}!</h2>}
    </div>
    
  );
};

export default App;
