import {
  Description,
  Image,
  Portion,
  Price,
  Serving,
  StyledItem,
  Tags,
  Title,
  Type,
} from './styles';
import itens from '../itens.json';

type props = typeof itens[0];

const Item = (props: props) => {
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
