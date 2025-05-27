import styles from "./Projects.module.css";
import firstPage from "../../image/firstPage.svg";
import Cards from "../elements/Cards";

function Projects() {
  return (
    <section className={styles.Projects} id="projects">
      <h1>Projetos</h1>
      <div>
        <div className={styles.cardSection}>
          <Cards
            hiddenInfo="Esta página consiste em elementos básicos, como cabeçalho,
                    menu de navegação, seções de conteúdo e um rodapé, alem do carossel feito com ajuda do JavaScript. "
            img={firstPage}
            title="Landing Page DNC"
            tech="HTML,CSS,JS"
            description="Desenvolvi como parte do meu curso da DNC, onide apliquei boas praticas de programacao. 
                    Utilizei HTML para estruturar o conteúdo da página, CSS para estilizar e dar um design atraente. "
            site="https://school-landingpage.netlify.app/"
            btnText="Clique aqui"
            repo="https://github.com/IsaqueFabro/School-Landing-Page"
            subtilteImg="Clique na imagem para saber mais, e ter acesso ao link do projeto!"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
