import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTabletLandscape(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M512 128v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64zM32 384a32 32 0 0032 32h384a32 32 0 0032-32V128a32 32 0 00-32-32H64a32 32 0 00-32 32z" /><Path d="M0 128a64.07 64.07 0 0164-64h384a64.07 64.07 0 0164 64v256a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128m480 256V128a32 32 0 00-32-32H64a32 32 0 00-32 32v256a32 32 0 0032 32h384a32 32 0 0032-32m-16 0a16 16 0 01-16 16H64a16 16 0 01-16-16V128a16 16 0 0116-16h384a16 16 0 0116 16v256z" /></Svg>;
}

export default SvgTabletLandscape;