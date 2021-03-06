import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnUpForward(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M400 160l64 64-64 64" /><Path d="M448 224H154c-58.76 0-106 49.33-106 108v20" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgReturnUpForward;