import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaUser, FaSearch, FaMoon, FaSun, FaAngleDown } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/theme.context";
import MobileMenu from "./Mobile";
import { SidebarContext } from "@/context/Sidebar";
import SideBar from "../sidebar/SideBar.components";
import { CartContext } from "@/context/cart.context";

const Header = () => {
    const router =useRouter();
    const current = router.pathname;
    const {theme, setTheme} = useContext(ThemeContext)
    const {open, setOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);

    
    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
       <header id="header">
        <div className="container">
            <div className="all-content">
                <div className="logo">
                <MobileMenu/>
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
                            <Link className={current === '/hoodie' ? 'active' : 'nonactive'} href="#">Men <FaAngleDown/> </Link>
                            <ul className="dropdown">
                                <li>
                                    <Link href='./hoodie' className={current === '/hoodie' ? 'active' : 'nonactive'}>Hoodie</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'men' ? 'active' : 'nonactive'}>Sweatshirt</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'men' ? 'active' : 'nonactive'}>T-shirt</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'men' ? 'active' : 'nonactive'}>Hats</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'men' ? 'active' : 'nonactive'}>Accessory</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'men' ? 'active' : 'nonactive'}>Shoes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className={current === 'women' ? 'active' : 'nonactive'} href="#">Women <FaAngleDown/></Link>
                            <ul className="dropdown">
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>Hoodie</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>Sweatshirt</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>T-shirt</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>Hats</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>Accessory</Link>
                                </li>
                                <li>
                                    <Link href='#' className={current === 'women' ? 'active' : 'nonactive'}>Shoes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className={current === '/about' ? 'active' : 'nonactive'} href="#">About <FaAngleDown/></Link>
                            <ul className="dropdown">
                                <li>
                                    <Link href='./about' className={current === 'about' ? 'active' : 'nonactive'}>About us</Link>
                                </li>
                                <li>
                                    <Link href='./faq' className={current === 'faq' ? 'active' : 'nonactive'}>FAQ</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className={current === '/blog' ? 'active' : 'nonactive'} href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={current === '/contact' ? 'active' : 'nonactive'} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="other">
                    <div className="dark-template item">
                        <button onClick={handleTheme}>{theme === "dark" ? <FaSun/> : <FaMoon/>}</button>
                    </div>
                    <div className="user item ">
                        <Link href="/user">
                            <FaUser/>
                        </Link>
                    </div>
                    <div onClick={() => setOpen(!open)}  className="item cart">
                        <FaShoppingCart/>
                        <span>{itemAmount}</span>
                    </div>
                </div>
            </div>
        </div>
        <SideBar/>
       </header>
    )
}
export default Header;