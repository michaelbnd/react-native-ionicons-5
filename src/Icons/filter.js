import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilter(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M472 168H40a24 24 0 010-48h432a24 24 0 010 48zM392 280H120a24 24 0 010-48h272a24 24 0 010 48zM296 392h-80a24 24 0 010-48h80a24 24 0 010 48z" /></Svg>;
}

export default SvgFilter;