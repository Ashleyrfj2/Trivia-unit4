import userIcon from '../../assets/userIcon.png'

const Navbar = ({ userName }) => {
  return (
    <>
<div className="navbar">
<div className="navbar bg-base-100 shadow-sm h-25 ">
  <div></div>
  <div className="Logicon w-42">
<div className="chat chat-end">
  <div className="chat-image avatar avatar-online">
    <div className="w-11 rounded-full ring-primary">
      <img
        alt="The main man"
        src={userIcon}
        ></img>
    </div>
         </div>  
    <div className="chat-bubble w-34  text-center">Hello, {userName}!</div>
 </div></div>
</div></div>
</>
)
}
export default Navbar;
