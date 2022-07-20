import { useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { constants } from "../../resources";
import { palette } from "../../resources/palette";
import { en } from "../../resources/en";
import { InfoSection } from "../../sections/InfoSection/InfoSection";
import { Portrait, Wrapper } from "./Character.styles";
import { CharacterContext } from "../../contexts/CharacterContext/CharacterContext";

const { SCREEN_SIZES } = constants;

const getCharacterImage = (name) =>
  require(`../../resources/images/${name}.png`);

export const Character = () => {
  const { name } = useParams();
  const [character] = useState(name);
  const { [character]: colors } = palette.characters;

  return (
    <CharacterContext.Provider value={{ character }}>
      <ThemeProvider theme={{ colors, SCREEN_SIZES }}>
        <Wrapper>
          <Portrait src={getCharacterImage(character)} />
          <InfoSection title={en[character].title} />
        </Wrapper>
      </ThemeProvider>
    </CharacterContext.Provider>
  );
};
