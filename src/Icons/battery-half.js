import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgBatteryHalf(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={32} y={144} width={400} height={224} rx={45.7} ry={45.7} fill="none" stroke={props.fill} strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} /><Rect x={85.69} y={198.93} width={154.31} height={114.13} rx={4} ry={4} stroke={props.fill} strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M480 218.67v74.66" /></Svg>;
}

export default SvgBatteryHalf;