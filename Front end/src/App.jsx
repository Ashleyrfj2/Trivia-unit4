import { useState } from 'react';
import Modal from './components/modal.jsx'; 
import GamePlay from './components/gameplay/main';
import { Route, Routes } from 'react-router-dom';
import Settings from './components/settings/settings';

const App = () => {
  
  const [loginModal, setLoginModal] = useState(true);
  const [username, setUsername] = useState('');

//   return ( 
//   <>
//     <div>
     
//       {loginModal && (
//         <Modal 
//           userNameLogIn={setUsername} 
//           setLoginModal={setLoginModal} 
//         />
//       )}

//         {username && <h2>Welcome, {username}!</h2>}
//     </div>
    
// </>
//     )


  return (
    <>
    <Routes>
      <Route path="/" element = {<Settings/>}/>
      <Route path="/login" element={<Modal/>}/>
      <Route path="/play" element={<GamePlay />} />
      <Route path="/play/:category/:difficulty" element={<GamePlay />} />
      <Route path="/play/placeholder" element={<endGamePlaceHolder/>}/>
     
    </Routes>
    </>
  );
};

export default App;
