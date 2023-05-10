import styled from "styled-components";

export const AboutUs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;

  img {
    object-fit: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: justify;

    p {
      font-family: "Josefin Sans", sans-serif;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  div {
    width: 600px;

    img {
      border-radius: 5px;
      width: 100%;
    }
  }
`;
