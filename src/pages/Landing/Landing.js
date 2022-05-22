import { en } from "./Landing.en";
import {
  TitleWrapper,
  Title,
  CharacterSection,
  CharacterCardWrapper,
  CharacterCard,
  Subtitle,
} from "./Landing.styles";
import { IMAGE_POSITIONS, CHARACTER_NAMES } from "../../resources/constants";

const images = CHARACTER_NAMES.map((name) =>
  require(`../../resources/images/${name}.png`)
);

const calculateMargins = (i) =>
  i === 0 ? "0 0 0 100px" : i === images.length - 1 ? "0 100px 0 0" : "";

export const Landing = () => (
  <>
    <TitleWrapper>
      <Title>{en.title}</Title>
      <Subtitle>{en.subtitle}</Subtitle>
    </TitleWrapper>
    <CharacterSection>
      {images.map((image, i) => (
        <CharacterCardWrapper
          key={i}
          href="#"
          position={IMAGE_POSITIONS[i % 3]}
        >
          <CharacterCard src={image} margin={calculateMargins(i)} />
        </CharacterCardWrapper>
      ))}
    </CharacterSection>
  </>
);
