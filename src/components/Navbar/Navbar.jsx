import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <p>Sweetopia</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
