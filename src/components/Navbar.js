import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Name</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New task</a>
      </div>
    </nav>
  );
};

export default Navbar;
