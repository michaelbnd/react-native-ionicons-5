import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShieldHalf(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63z" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464z" /></Svg>;
}

export default SvgShieldHalf;