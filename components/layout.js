import Head from "next/head";
import Navbar from  './navbar';

function Layout({ children }) {
  return (
    <div className="container">
      <Head></Head>
    
        <header>
            <Navbar />
        </header>


      <main>{children}</main>
    </div>
  );
}

export default Layout;
