import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRemoveSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="square" strokeLinejoin="round" strokeWidth={32} d="M400 256H112" /></Svg>;
}

export default SvgRemoveSharp;