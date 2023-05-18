import menu from "../../data/menu.json";
import { NossaCasa, Recommended, Recommendeds } from "./styles";
import { Title } from "../../UI/theme";
import { useNavigate } from "react-router-dom";
import { Dish } from "../../types/Dish";

const Home = () => {
  let recommendedDishes = [...menu];
  const navigate = useNavigate();

  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  function redirectDetails(dish: Dish) {
    navigate(`/dish/${dish.id}`);
  }

  return (
    <section>
      <Title>Recomendações da cozinha</Title>
      <Recommendeds>
        {recommendedDishes.map((dish: Dish) => (
          <Recommended key={dish.id}>
            <div>
              <img src={dish.photo} alt={dish.title} />
            </div>
            <button onClick={() => redirectDetails(dish)}>Ver mais</button>
          </Recommended>
        ))}
      </Recommendeds>
      <Title> Nossa casa </Title>
      <NossaCasa>
        <img src="/src/assets/home/nossa_casa.png" alt="cara aluroni" />
        <div>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </NossaCasa>
    </section>
  );
};

export default Home;
