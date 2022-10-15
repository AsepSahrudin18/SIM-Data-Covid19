import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout({ listItem, children }) {
  return (
    <>
      <Navbar listItem={listItem} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
