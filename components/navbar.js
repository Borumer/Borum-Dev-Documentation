import Link from "next/link";
import navbar from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={navbar.navbar}>
            <ul className={navbar.list}>
                <li>
                    <Link href="/Jot">
                        <a>Borum Jot</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Forum">
                        <a>Borum Forum</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Flytrap">
                        <a>Flytrap</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Farms">
                        <a>Borum Farms</a>
                    </Link>
                </li>
            </ul>
            <button className={navbar.login}>Login</button>
           
        </nav>
    );
}