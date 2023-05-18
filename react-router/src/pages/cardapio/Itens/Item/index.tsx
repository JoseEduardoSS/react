import {
  Description,
  Image,
  StyledItem,
  Title,
} from "./styles";
import itens from "../../../../data/menu.json";
import {Portion, Price, Serving, Tags, Type} from '../../../../UI/theme';
import {Dish} from '../../../../types/Dish';

const Item = (props: Dish) => {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <StyledItem>
      <Image>
        <img src={photo} alt={title} />
      </Image>
      <Description>
        <Title>
          <h2>{title}</h2>
          <p>{description}</p>
        </Title>
        <Tags>
          <Type type={category.label.toLowerCase()}>{category.label}</Type>
          <Portion>{size}g</Portion>
          <Serving>Para {serving}</Serving>
          <Price>R$ {price.toFixed(2)}</Price>
        </Tags>
      </Description>
    </StyledItem>
  );
};

export default Item;
