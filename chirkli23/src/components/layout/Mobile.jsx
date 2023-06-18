import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MobileMenu = () => {
    const [active, setActive] = useState(false);
    const [down, setDown] = useState(false);
    const router = useRouter()
    const current = router.pathname;
    return(
        <div id="all">
            <div className={active ? "responsive" : "mobile-menu"}>
                <ul className="mobile-list">
                    <li>
                        <Link href="/" className={current === '/' ? "active" : "deactive"}>Home</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setDown(!down)} className={current === 'men' ? "active" : "deactive"}>Men {down ? <FaAngleUp/> : <FaAngleDown/>}</Link>
                        <ul className={down ? "dropdown" : "dropup"}>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hoodie</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Sweatshirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>T-shirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hats</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Accessory</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'men' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Shoes</Link>
                                </li>
                            </ul>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setDown(!down)} className={current === 'women' ? "active" : "deactive"}>Women {down ? <FaAngleUp/> : <FaAngleDown/>}</Link>
                        <ul className={down ? "dropdown" : "dropup"}>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hoodie</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Sweatshirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>T-shirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hats</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Accessory</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'women' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Shoes</Link>
                                </li>
                            </ul>
                    </li>
                    <li>
                        <Link href="#" className={current === 'kids' ? "active" : "deactive"}>Kids</Link>
                        <ul className={down ? "dropdown" : "dropup"}>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hoodie</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Sweatshirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>T-shirt</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Hats</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Accessory</Link>
                                </li>
                                <li className="pad">
                                    <Link href='#' className={current === 'kids' ? 'active' : 'deactive'} style={{paddingLeft:"40px"}}>Shoes</Link>
                                </li>
                            </ul>
                    </li>
                    <li>
                        <Link href="#" className={current === 'about' ? "active" : "deactive"}>About</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === 'blog' ? "active" : "deactive"}>Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === 'contact' ? "active" : "deactive"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => setActive(!active)} className={active ? "open" : "close"}><span></span></button>
        </div>
    )
}
export default MobileMenu;