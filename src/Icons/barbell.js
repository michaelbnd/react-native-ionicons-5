import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarbell(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M467 176a29.94 29.94 0 00-25.32 12.5 2 2 0 01-3.64-1.14v-36.65c0-20.75-16.34-38.21-37.08-38.7A38 38 0 00362 150v82a2 2 0 01-2 2H152a2 2 0 01-2-2v-81.29c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0074 150v37.38a2 2 0 01-3.64 1.14A29.94 29.94 0 0045 176c-16.3.51-29 14.31-29 30.62v98.72c0 16.31 12.74 30.11 29 30.62a29.94 29.94 0 0025.32-12.5 2 2 0 013.68 1.16v36.67C74 382 90.34 399.5 111.08 400A38 38 0 00150 362v-82a2 2 0 012-2h208a2 2 0 012 2v81.29c0 20.75 16.34 38.21 37.08 38.7A38 38 0 00438 362v-37.38a2 2 0 013.64-1.14A29.94 29.94 0 00467 336c16.3-.51 29-14.31 29-30.62v-98.74c0-16.31-12.74-30.11-29-30.64z" /></Svg>;
}

export default SvgBarbell;