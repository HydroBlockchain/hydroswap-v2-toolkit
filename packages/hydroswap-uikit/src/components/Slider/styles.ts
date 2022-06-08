import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import bunnyHeadMain from "./svg/bunnyhead-main.svg";
import bunnyHeadMax from "./svg/bunnyhead-max.svg";
import bunnyButt from "./svg/bunnybutt.svg";
import { useTheme } from 'styled-components'

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled, ...others }: StyledInputProps) => `
  -webkit-appearance: none;
  // background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
  // background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 24px;
  height: 14px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, 7px);
  transition: 200ms transform;
  border-radius: 0px 50px 50px 0px;
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) =>  {
    return progress
  } };
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 0px;
  width: calc(100% - 14px);
  width:100%;
  `;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;  

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles};
    background-color: ${({ theme }) => theme.colors.gradients.cardHeader};
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles};
    background-color: ${({ theme }) => theme.colors.gradients.cardHeader};
  }

  ::-ms-thumb {
    ${getBaseThumbStyles};
    background-color: ${({ theme }) => theme.colors.gradients.cardHeader};
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "input"]};
  height: 14px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.gradients.cardHeader};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 14px;
  position: absolute;
  top: 18px;
`;
