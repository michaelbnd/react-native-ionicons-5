import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScanCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Path d="M296 352h28a28 28 0 0028-28v-28M352 216v-28a28 28 0 00-28-28h-28M216 352h-28a28 28 0 01-28-28v-28M160 216v-28a28 28 0 0128-28h28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgScanCircleOutline;