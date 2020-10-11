import Head from "next/head";
import Navbar from  './navbar';
import layout from './layout.module.css';

function Layout({ children }) {
  return (
    <div className="container">
      <Head></Head>
    
        <header>
            <Navbar />
        </header>


        <main className={layout.main}>{children}</main>

        <footer>&copy; 2020 Borum Tech</footer>
    </div>
  );
}

export default Layout;
