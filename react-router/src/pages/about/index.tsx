import { Title } from "../../UI/theme";
import { AboutUs, Images } from "./styles";

const About = () => {
  return (
    <section>
      <Title> Sobre </Title>
      <AboutUs>
        <img src="/src/assets/about/casa.png" alt="Casa aluroni"></img>
        <div>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </AboutUs>
      <Images>
        <div>
          <img src="/src/assets/about/massa1.png" alt="Massa 1"></img>
        </div>
        <div>
          <img src="/src/assets/about/massa2.png" alt="Massa 2"></img>
        </div>
      </Images>
    </section>
  );
};

export default About;
