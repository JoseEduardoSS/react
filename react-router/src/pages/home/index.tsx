import menu from "../../data/menu.json";
import { Recommended, Recommendeds, Title } from "./styles";
import Menu from "../../components/menu";

type dish = typeof menu[0];

const Home = () => {
  let recommendedDishes = [...menu];

  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <Title>Recomendações da cozinha</Title>
      <Recommendeds>
        {recommendedDishes.map((dish: dish) => (
          <Recommended key={dish.id}>
            <div>
              <img src={dish.photo} alt={dish.title} />
            </div>
            <button>Ver mais</button>
          </Recommended>
        ))}
      </Recommendeds>
    </section>
  );
};

export default Home;
