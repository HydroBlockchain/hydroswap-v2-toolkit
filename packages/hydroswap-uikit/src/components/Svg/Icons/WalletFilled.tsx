import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet"
    //  viewBox="0 0 24 24"
      {...props}>
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z"
      /> */}

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M2454 4760 c-96 -19 -131 -48 -596 -496 -249 -240 -491 -474 -538
-520 l-85 -84 215 0 215 0 525 326 c289 179 585 362 658 407 l133 81 -103 103
c-119 120 -170 156 -253 178 -64 16 -106 17 -171 5z"/>
<path d="M3105 4351 c-27 -10 -241 -137 -475 -281 -234 -145 -476 -294 -537
-332 -62 -38 -113 -72 -113 -74 0 -2 425 -4 945 -4 l945 0 -162 268 c-88 147
-174 284 -190 305 -90 114 -277 168 -413 118z"/>
<path d="M626 3489 c-62 -15 -153 -68 -197 -116 -22 -24 -55 -74 -72 -111
l-32 -67 -3 -1235 c-2 -921 0 -1249 9 -1290 34 -158 158 -280 318 -310 79 -15
3342 -14 3413 1 165 35 291 168 318 334 5 33 10 180 10 327 l0 267 -467 3
c-522 5 -519 4 -668 78 -99 49 -170 110 -229 199 -209 314 -116 749 199 932
28 16 86 41 130 56 l80 27 478 4 479 3 -4 292 c-5 329 -9 353 -78 449 -42 59
-133 128 -198 150 -29 10 -394 13 -1742 14 -1005 1 -1721 -2 -1744 -7z"/>
<path d="M3429 2412 c-256 -67 -411 -337 -344 -597 48 -181 204 -323 393 -355
46 -7 243 -10 618 -8 l551 3 48 30 c36 22 57 45 77 84 l28 53 0 310 c0 217 -4
323 -12 352 -16 53 -81 118 -134 134 -31 9 -186 12 -600 11 -495 0 -567 -2
-625 -17z m396 -437 c16 -15 25 -36 25 -55 0 -39 -39 -80 -75 -80 -32 0 -85
50 -85 80 0 30 53 80 85 80 14 0 37 -11 50 -25z"/>
</g>
    </Svg>
  );
};

export default Icon;
