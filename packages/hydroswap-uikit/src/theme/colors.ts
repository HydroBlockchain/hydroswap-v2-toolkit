import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  // primary: "#e9e9e9",
  primary: "#2e2e30cf",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#101010",
  success: "#31D0AA",
  warning: "#dfd980",
};

// #2e2e30cf

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#c5c5c5",//"#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "hsla(240, 4%, 14%, 1)", // hsla(0, 0%, 91%, 1)
  menuBackground: "hsla(0, 0%, 91%, 1)",
  background: "#FFFFFF", //"#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "hsla(0, 0%, 91%, 1)", // #E9E9E9
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  menuDropBackground:"hsla(0, 0%, 96%, 1)",
  cardBorder: "none",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "hsla(0, 0%, 100%, 1)", //"#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#FFFFFF",
  sliderBackground:'#FFFFFF',
  text:"hsla(0, 0%, 27%, 1)", //"#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "hsla(240, 4%, 14%, 1)", // hsla(0, 0%, 100%, 1)
  disabled: "#E9EAEB",
  btnBackground:"hsla(216, 18%, 46%, 1)",
  btnColor:"hsla(0, 0%, 100%, 1)",
  gradients: {
    bubblegum: "background-image: linear-gradient(to right top, #c5c5c5, #d3d3d3, #e2e2e2, #f0f0f0, #ffffff);",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "hsla(0, 0%, 91%, 1)", //"linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    cardBody:"hsla(0, 0%, 96%, 1)",
    blue:  "none", //"linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "none", //"linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt:"none", // "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "none" // "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
 // background: "#000000",
 menuBackground: "hsla(240, 4%, 9%, 1)",
 menuDropBackground:"hsla(240, 4%, 14%, 1)",
 background: "hsla(240, 4%, 14%, 1)", // hsla(240, 4%, 14%, 1) #212124;
  primary: "#e9e9e9", 
  secondary: "#c5c5c5",
  btnBackground:"hsla(284, 14%, 27%, 1)",
  btnColor:"hsla(0, 0%, 100%, 1)",
  backgroundDisabled: "hsla(240, 4%, 14%, 1)",
  sliderBackground:'hsla(240, 4%, 14%, 1)',
  backgroundAlt:"hsla(240, 4%, 14%, 1)", // "#161618", //hsla(240, 4%, 14%, 1)
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "none",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "hsla(240, 4%, 14%, 1)", //#161618
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#212124",
  text:"hsla(0, 0%, 77%, 1)", //"#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#c5c5c5",
  disabled: "#524B63",
  gradients: {
    bubblegum: "hsla(240, 4%, 14%, 1)", //linear-gradient(139.73deg,#3D2A54 0%,#00458e 100%)
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "hsla(0, 0%, 6%, 1)", //"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    cardBody:"hsla(240, 4%, 9%, 1)",
    blue:  "none", //"linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet:  "none", //"linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "none" ,// "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold:  "none" //"linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
