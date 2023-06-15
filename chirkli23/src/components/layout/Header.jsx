import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaSearch, FaMoon, FaSun, FaAngleDown } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/theme.context";

const Header = () => {
    const router =useRouter();
    const current = router.pathname;
    const {theme, setTheme} = useContext(ThemeContext)

    
    useEffect(() => {
        document.body.className = theme;
        // localStorage.setItem('tema', theme);
    },[theme])
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
       <header id="header">
        <div className="container">
            <div className="all-content">
                <div className="logo">
                    <Link href='/'>
                        <span>ChiRkLi</span>
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
                            <Link className={current === 'women' ? 'active' : 'nonactive'} href="#">Kids</Link>
                        </li>
                        <li>
                            <Link className={current === '/about' ? 'active' : 'nonactive'} href="#">About <FaAngleDown/></Link>
                            <ul className="dropdown">
                                <li>
                                    <Link href='./about' className={current === '/about' ? 'active' : 'nonactive'}>About us</Link>
                                </li>
                                <li>
                                    <Link href='./about' className={current === 'about' ? 'active' : 'nonactive'}>FAQ</Link>
                                </li>
                            </ul>
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
                    <div className="dark-template item">
                        <button onClick={handleTheme}>{theme === "dark" ? <FaSun/> : <FaMoon/>}</button>
                    </div>
                    <div className="user item ">
                        <Link href="#">
                            <FaUser/>
                        </Link>
                    </div>
                    <div className="item cart">
                        <Link href='#'>
                            <FaShoppingCart/>
                            <span>0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </header>
    )
}
export default Header;