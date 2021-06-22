import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgPulseOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 320h64l64-256 64 384 64-224 32 96h64" /><Circle cx={432} cy={320} r={32} fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgPulseOutline;