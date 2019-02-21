import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                    <a className="nav-link">About</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Navbar