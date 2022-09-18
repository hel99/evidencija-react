import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="nav-m">
                <Link className='nav-m-link'>Prisustva</Link>
                <Link className='nav-m-link'>Kašnjenja</Link>
                <Link className='nav-m-link'>Zaposleni</Link>
            </nav>
        </div>
    )
}

export default Nav;