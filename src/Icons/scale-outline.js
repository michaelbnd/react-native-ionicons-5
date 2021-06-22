import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgScaleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Rect x={48} y={48} width={416} height={416} rx={96} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 00-3.06 48.08l33.32 39.21a26.07 26.07 0 0033.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0033.6-5.21L392 199.64a34.66 34.66 0 00-3.06-48.08z" fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgScaleOutline;