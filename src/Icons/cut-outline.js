import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCutOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={104} cy={152} r={56} fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={104} cy={360} r={56} fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M157 175l-11 15 37 15s3.46-6.42 7-10z" fill="none" stroke={props.fill} strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} /><Path d="M154.17 334.43L460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82zM344.47 278.24L295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6z" fill="none" stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={256} cy={240} r={32} fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgCutOutline;