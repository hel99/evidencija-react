import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="nav-m">
                <Link to="/prisustva" className='nav-m-link'>Prisustva</Link>
                <Link to="/kasnjenja" className='nav-m-link'>Kašnjenja</Link>
                <Link to="/zaposleni" className='nav-m-link'>Zaposleni</Link>
            </nav>
        </div>
    )
}

export default Nav;