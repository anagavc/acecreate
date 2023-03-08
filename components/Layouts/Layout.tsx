import Head from "next/head";
import Navbar from "../Navigation/Navbar";
import Footer from "./Footer";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Acecreate Technologies</title>
        <meta property="og:image" content="%PUBLIC_URL%/acemockup.jpg" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
