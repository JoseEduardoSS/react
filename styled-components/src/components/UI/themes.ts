import {
  darkBackground,
  darkBackgroundText,
  darkContent,
  lightBackground,
  lightBackgroundText,
  lightContent,
} from "./variables";

export const lightTheme = {
  body: lightBackground,
  inside: lightContent,
  text: lightBackgroundText,
  filter: ''
};

export const darkTheme = {
  body: darkBackground,
  inside: darkContent,
  text: darkBackgroundText,
  filter: "invert(100%)"
};
