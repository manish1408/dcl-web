import Header from "../components/Header";
import Footer from "../components/Footer";

const blogSingle = ({ children }) => (
  <>
    <Header />
    <h3>Layout Rendered</h3>
    <main>{children}</main>
    <Footer />
  </>
);
export default blogSingle;
