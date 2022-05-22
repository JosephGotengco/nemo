import styled from "styled-components";
import { palette } from "./../../resources/palette";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled(FlexWrapper)`
  padding: 50px 100px 50px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 50px 20px 25px;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display SC", serif;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 5%;
  color: ${palette.text};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const CharacterCardWrapper = styled.a`
  align-self ${({ position }) => position || "start"};
  margin-right: 15px;
`;

export const CharacterCard = styled.img`
  height: 545px;
  width: 170px;
  transition: width 0.4s;
  object-fit: cover;
  ${({ margin }) => margin && `margin: ${margin}`};

  &:hover {
    width: 250px;
  }
`;

export const CharacterSection = styled(FlexWrapper)`
  height: 700px;
  overflow-x: auto;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: start;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Subtitle = styled.p`
  font-family: "Playfair Display SC", serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 5%;
  color: ${palette.text};
`;
