// import Modal from './components/modal.jsx';
// const [loginModal, setLoginModal] = useState(true);
// const [username, setUsername] = useState('');
// {loginModal && (
//   <Modal 
//     userNameLogIn={setUsername}
//     setLoginModal={setLoginModal}
//   />
// )}
// {username} * this can be used anywhere


import {useState } from 'react'; //import the useState to be able to use states in this components

const Modal = ({ userNameLogIn, setLoginModal }) => { //

const [logIn, setLogIn] = useState ({
	userName: '',
	password: ''
})

const handleInputChange = (event) => {
	setLogIn({...logIn, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
	event.preventDefault();

	console.log('Username being sent to parent:', logIn.userName); 

	userNameLogIn(logIn.userName);

    setLoginModal(false);
}

return (
	<div>
	<p>Welcome Back!</p>
      <input name="userName" onChange={handleInputChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleInputChange} placeholder="Password" />
      <button onClick={handleSubmit}>Log In</button>
    </div>
)
}

export default Modal;


