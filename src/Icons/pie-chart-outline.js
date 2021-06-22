import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChartOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0189.12 330.65" fill="none" stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} /><Path d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0018.09 85L256 256z" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgPieChartOutline;