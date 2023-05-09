import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Connect from "./components/Connect";

const developer = [
  {
    title: "Geographical Hazards",
    description: 23,
    url: "DA",
    image: "./Projects/Earthquakes.png"
  },
  {
    title: "Exoplanets Machine Learning",
    description: 29,
    url: "DA",
    image: "./Projects/Exoplanets.png"
  },
  {
    title: "Mars Web Scraping",
    description: 26,
    url: "DA",
    image: "./Projects/MarsScraping.png"
  },
  {
    title: "Notes App",
    description: 23,
    url: "DEV",
    image: "./Projects/NotesApp.png"
  },
  {
    title: "Nuevo Leon Elections",
    description: 29,
    url: "DA",
    image: "./Projects/NuevoLeonElections.png"
  },
  {
    title: "Soccer Quiz",
    description: 26,
    url: "DEV",
    image: "./Projects/SoccerQuiz.png"
  },
  {
    title: "Tech Blog",
    description: 23,
    url: "DEV",
    image: "./Projects/TechBlog.png"
  },
  {
    title: "ThermoFoods App",
    description: 29,
    url: "DEV",
    image: "./Projects/ThermoFoods.png"
  },
  {
    title: "Tottenham Blog",
    description: 26,
    url: "DEV",
    image: "./Projects/TottenhamBlog.png"
  },
  {
    title: "WeatherApp",
    description: 26,
    url: "DEV",
    image: "./Projects/WheatherApp.png"
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects developer={developer} />
      <About />
      <Connect />
    </div>
  );
}

export default App;
