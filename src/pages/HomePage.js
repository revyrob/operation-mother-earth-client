import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

function HomePage() {
  return (
    <section className="homepage">
      <Header />
      <Banner />
      <NavBar />
    </section>
  );
}

export default HomePage;
