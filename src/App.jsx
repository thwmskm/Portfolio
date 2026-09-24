import { useState, useEffect } from "react";
import Splash from "./components/Splash.jsx";
import "./index.css";
import "./App.css";
import Projects from "./components/project-section/Project.jsx";
import Contact from "./components/Contact.jsx";
import EvStore from "./components/project-section/EvStore.jsx";
import GroceryApp from "./components/project-section/GroceryApp.jsx";
import YUYL from "./components/project-section/YUYL.jsx";
import GroceryAppSummary from "./components/project-section/GroceryAppSummary.jsx";
import { projects } from "./components/project-section/projectMetaData.js";
import Info from "./components/Info.jsx";
import Cursor from "./components/Cursor.jsx";
import "./components/Cursor.module.css";
import { Menu, X } from "lucide-react";

function App() {
  const [splash, setSplash] = useState(true);
  const [activeSection, setActiveSection] = useState("Projects"); // "Projects", "Info", "Contact", "Grocery App Summary"
  const [activeProjectId, setActiveProjectId] = useState(1); //For numeric project id
  const [fade, setFade] = useState(false);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false); //For mobile Navigation Menu panel

  //On launch load splash page
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //On theme change (Light/ Dark)
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (splash) {
    return <Splash className="splash" fade={fade}></Splash>;
  }

  //handling data from Project.jsx to determine which content to display
  const handleChildData = (message) => {
    if (typeof message === "number") {
      setActiveProjectId(message);
      handleContentSwap("ProjectDetail");
    } else if (message === "Grocery App Summary") {
      handleContentSwap("Grocery App Summary");
    }
  };

  //function for switching states of the main content
  const handleContentSwap = (newSection) => {
    if (newSection === activeSection) return;
    setFade(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setActiveSection(newSection);
      setFade(false);
    }, 400);
  };

  //function to change the display for main content based on case
  const determineContent = () => {
    switch (activeSection) {
      case "Projects":
        return <Projects handleProjectSwap={handleChildData}></Projects>;
      /*case "Contact":
        return <Contact></Contact>;*/
      case "Info":
        return <Info></Info>;
      case "ProjectDetail": {
        const project = projects.find((p) => p.id === activeProjectId);
        if (!project) return null;
        if (project.id === 1) {
          return (
            <YUYL
              project={project}
              onBack={() => handleContentSwap("Projects")}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          );
        } else if (project.id === 2) {
          return (
            <EvStore
              project={project}
              onBack={() => handleContentSwap("Projects")}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          );
        } else if (project.id === 3) {
          return (
            <GroceryApp
              project={project}
              onBack={() => handleContentSwap("Projects")}
              onNext={handleNext}
              onPrev={handlePrev}
              onSummary={() => handleChildData("Grocery App Summary")}
            />
          );
        } else {
          return null;
        }
      }
      case "Grocery App Summary":
        return (
          <GroceryAppSummary
            onClose={() => handleContentSwap("ProjectDetail")}
          />
        );
      default:
        return <Projects handleProjectSwap={handleChildData}></Projects>;
    }
  };

  //handling display of next project in list
  const handleNext = () => {
    setFade(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setActiveProjectId((prevId) =>
        prevId >= projects.length ? 1 : prevId + 1,
      );
      setFade(false);
    }, 400);
  };

  // Previous project
  const handlePrev = () => {
    setFade(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setActiveProjectId((prevId) =>
        prevId <= 1 ? projects.length : prevId - 1,
      );
      setFade(false);
    }, 400);
  };

  return (
    <>
      <Cursor className="cursor" />
      <div className="screen">
        {/* --- Hamburger Button --- */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* --- Sidebar Menu --- */}
        <section className={`menu-section ${menuOpen ? "open" : ""}`}>
          <div
            className="name-section"
            data-cursor="link"
            onClick={() => {
              handleContentSwap("Projects");
              setMenuOpen(false);
            }}
          >
            <h2 className="name-initial">
              H<span className="name-half name-space">wan </span>K
              <span className="name-half">im</span>.
            </h2>
          </div>
          <br />
          {/*Main content list*/}
          {["Projects", "Info"].map((item) => (
            <p
              key={item}
              onClick={() => {
                handleContentSwap(item);
                setMenuOpen(false);
              }}
              style={{ color: activeSection === item ? "gray" : "" }}
              className={`links ${activeSection === item ? "active" : ""}`}
              data-cursor="link"
            >
              {item}
            </p>
          ))}
          <div className="mode">
            <div
              className={`box light ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
              data-cursor="link"
            />
            <div
              className={`box dark ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
              data-cursor="link"
            />
          </div>
        </section>

        {/* --- Main Section --- */}
        <section className={`main-section ${fade ? "fade" : ""}`}>
          {determineContent()}
        </section>
      </div>
    </>
  );
}

export default App;
