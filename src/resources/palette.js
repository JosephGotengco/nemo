import { CHARACTER_NAME_MAP } from "./constants";
const { CHIE, NAOTO, KANJI, RISE, YU, YUKIKO, YOSUKE } = CHARACTER_NAME_MAP;

const BACKGROUND_ALPHA = 0.1;
const TEXT_ALPHA = 0.4;

const getRgba = (rgb, alpha) => `rgba(${rgb}, ${alpha})`;

const CHARACTER_COLORS = {
  [CHIE]: "94, 188, 91",
  [NAOTO]: "0, 0, 128",
  [KANJI]: "103, 58, 179",
  [RISE]: "255, 183, 197",
  [YU]: "47, 53, 66, 0.25",
  [YUKIKO]: "255, 64, 51",
  [YOSUKE]: "250, 145, 35",
};

const getCharacterColors = (name) => ({
  background: getRgba(CHARACTER_COLORS[name], BACKGROUND_ALPHA),
  text: getRgba(CHARACTER_COLORS[name], TEXT_ALPHA),
});

export const palette = {
  characters: [CHIE, NAOTO, KANJI, RISE, YU, YUKIKO, YOSUKE].reduce(
    (characters, name) => ({
      ...characters,
      [name]: getCharacterColors(name),
    }),
    {}
  ),
  text: "#2F3542",
};
