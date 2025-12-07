

const Navbar = ({ userName }) => {



return (
<div className="navbar bg-base-100 shadow-sm">
  <a className="btn btn-ghost text-xl">Trivia</a>

<div className="navbar-end">
    <span className="btn">Hello, {userName}</span>
</div></div>
)


}
export default Navbar;