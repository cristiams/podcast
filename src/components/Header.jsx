import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#"><span className="text-primary">Podcaster</span></Link>
            </div>
        </nav>
    </header>
  )
}

export default Header