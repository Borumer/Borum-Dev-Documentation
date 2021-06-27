import Head from "next/head";
import Navbar from "./navbar";
import layout from "./layout.module.css";

function Layout({ children }) {
	return (
		<div className="container">
			<Head>
				<link
					href="/images/favicon.ico"
					rel="shortcut icon"
					type="image/x-icon"
				/>
			</Head>

			<header>
				<Navbar />
			</header>

			<main className={layout.main}>{children}</main>

			<footer className={layout.footer}>
				&copy; 2021 Borum Tech{" "}
				<a href="https://github.com/varunsingh87/Borum-Dev-Documentation">
					Open Source
				</a>
			</footer>
		</div>
	);
}

export default Layout;
