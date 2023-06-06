import Link from "next/link";

const Header = () => {
    return (
       <header id="header">
        <div className="container">
            <div className="all-content">
                <div className="logo">
                    <Link href='/'>
                        <span>ChiRkli</span>
                    </Link>
                </div>
                <nav className="menu">
                    <ul className="list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#">Men</Link>
                        </li>
                        <li>
                            <Link href="#">Women</Link>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Blog</Link>
                        </li>
                        <li>
                            <Link href="#">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
       </header>
    )
}
export default Header;