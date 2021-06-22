import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogInOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M288 336l80-80-80-80M80 256h272" /></Svg>;
}

export default SvgLogInOutline;