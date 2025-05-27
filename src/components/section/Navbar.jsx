import styles from "./Navbar.module.css";
import { useState } from "react";
import Tech from "../elements/Tech";

function Navbar() {
  const [showTechnologies, setShowTechnologies] = useState(false);

  const handleToggleTechnologies = () => {
    setShowTechnologies(!showTechnologies);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("projects")}>
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("timeline")}>
                Sobre mim
              </button>
            </li>
            <li>
              <button onClick={handleToggleTechnologies}>Tecnologias</button>
            </li>
          </ul>
        </div>

        <div className={styles.icons}>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/IsaqueFabro"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/isaque-fabro/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {showTechnologies && (
        <div>
          <Tech />
        </div>
      )}
    </>
  );
}

export default Navbar;
