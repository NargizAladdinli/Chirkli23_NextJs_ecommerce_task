import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
    const router =useRouter();
    const current = router.pathname;
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
                            <Link className={current === '/' ? 'active' : 'nonactive'} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={current === 'men' ? 'active' : 'nonactive'} href="#">Men</Link>
                        </li>
                        <li>
                            <Link className={current === 'women' ? 'active' : 'nonactive'} href="#">Women</Link>
                        </li>
                        <li>
                            <Link className={current === 'about' ? 'active' : 'nonactive'} href="#">About</Link>
                        </li>
                        <li>
                            <Link className={current === 'blog' ? 'active' : 'nonactive'} href="#">Blog</Link>
                        </li>
                        <li>
                            <Link className={current === 'contact' ? 'active' : 'nonactive'} href="#">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="other">
                    <div className="user">
                        <Link href="#">
                        <FaSearch/>
                        </Link>
                    </div>
                    <div className="user">
                        <Link href="#">
                            <FaUser/>
                        </Link>
                    </div>
                    <div className="user">
                        <Link href='#'>
                            <FaShoppingCart/>
                            <span>0</span>
                        </Link>
                    </div>
                    <div className="dark-template">
                        
                    </div>
                </div>
            </div>
        </div>
       </header>
    )
}
export default Header;