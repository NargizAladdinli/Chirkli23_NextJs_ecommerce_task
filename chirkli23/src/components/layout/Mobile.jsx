import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileMenu = () => {
    const [active, setActive] = useState(false)
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
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>Men</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>Women</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>Kids</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>About</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className={current === '#' ? "active" : "deactive"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => setActive(!active)}><span>sss</span></button>
        </div>
    )
}
export default MobileMenu;