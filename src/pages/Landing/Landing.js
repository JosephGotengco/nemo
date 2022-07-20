import { Link } from "react-router-dom";
import { constants, images } from "../../resources";
import { en } from "./Landing.en";
import {
  TitleWrapper,
  Title,
  CharacterSection,
  CharacterCardWrapper,
  CharacterCard,
  Subtitle,
} from "./Landing.styles";

const { CHARACTER_NAMES } = constants;

const IMAGE_POSITIONS = ["start", "center", "end"];

const calculateMargins = (i) =>
  i === 0 ? "0 0 0 100px" : i === images.length - 1 ? "0 100px 0 0" : "";

export const Landing = () => {
  return (
    <>
      <TitleWrapper>
        <Title>{en.title}</Title>
        <Subtitle>{en.subtitle}</Subtitle>
      </TitleWrapper>
      <CharacterSection>
        {CHARACTER_NAMES.map((name, i) => (
          <CharacterCardWrapper
            key={i}
            href="#"
            position={IMAGE_POSITIONS[i % 3]}
          >
            <Link to={`/character/${name}`}>
              <CharacterCard margin={calculateMargins(i)} src={images[name]} />
            </Link>
          </CharacterCardWrapper>
        ))}
      </CharacterSection>
    </>
  );
};
