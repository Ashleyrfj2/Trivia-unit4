
//const [loginModal, setLoginModal] = useState(true);

import {useState } from 'react';

const Modal = ({ userNameLogIn, setLoginModal }) => {

const [logIn, setLogIn] = useState ({
	userName: '',
	
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

 

	<div className="mockup-window border w-full" id="modalview">
	 <div className="grid place-content-center border-t border-base-30 h-80">Hello!
	 <p>Welcome Back!</p>
      <input name="userName" onChange={handleInputChange} placeholder="Username" />
      {/* <input name="password" type="password" onChange={handleInputChange} placeholder="Password" /> */}
      <button onClick={handleSubmit}>Log In</button>
    </div></div>
)
}

export default Modal;


