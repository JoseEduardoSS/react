import { useNavigate, useParams } from "react-router-dom";
import { Back, Container, Content, Image, Title } from "./styles";
import { Portion, Price, Serving, Tags, Type } from "../../UI/theme";
import menu from "../../data/menu.json";

const Dish = () => {
  const { id } = useParams();
  const dish = menu.find((dish) => dish.id === Number(id));

  const navigate = useNavigate();

  return (
    <>
      <Back onClick={() => navigate(-1)}>{"< Voltar"}</Back>
      <Container>
        <Title>{dish?.title}</Title>
        <Image>
          <img src={dish?.photo} alt={dish?.title} />
        </Image>
        <Content>
          <p>{dish?.description}</p>
          <Tags>
            <Type type={dish?.category.label.toLowerCase()}>
              {dish?.category.label}
            </Type>
            <Portion>{dish?.size}g</Portion>
            <Serving>Para {dish?.serving}</Serving>
            <Price>R$ {dish?.price.toFixed(2)}</Price>
          </Tags>
        </Content>
      </Container>
    </>
  );
};

export default Dish;
