import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRecording(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0030.36 79.77A2 2 0 01301 336h-90a2 2 0 01-1.44-3.37A111.64 111.64 0 00240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0016 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 00-115.21-111.48z" /></Svg>;
}

export default SvgRecording;