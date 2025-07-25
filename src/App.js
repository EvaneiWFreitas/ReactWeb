import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>
      <h1>Alô mundo!</h1>
      <p>Olá mundo! Estou aprendendo REACT JS</p>
    </Container>
    <Footer />
    </>
  );
}

export default App;
