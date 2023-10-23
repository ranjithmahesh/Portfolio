import About from "./components/About";
import Concate from "./components/Concate";
import Expreance from "./components/Expreance";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Expreance />
      <Concate />

      <SocialLinks />
    </div>
  );
}
