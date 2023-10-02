import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
