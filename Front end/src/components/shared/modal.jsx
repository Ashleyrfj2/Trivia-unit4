
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



	<div className="mockup-window border w-full content-center" id="modalview">	
	 <section className='login'> Welcome Back!
	 <div className="grid place-content-center border-t border-base-30 h-90" id='modalconent'>Hello!

      
<input type="text" placeholder="Username" className="input h-8 " onChange={handleInputChange}/>
			<div>
      <button className="btn btn-soft btn-accent h-4 w-40" onClick={handleSubmit}>Log In</button>
	  </div>
    </div></section></div>
)
}

export default Modal;


