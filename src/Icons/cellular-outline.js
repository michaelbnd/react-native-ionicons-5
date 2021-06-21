import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgCellularOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={416} y={96} width={64} height={320} rx={8} ry={8} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={288} y={176} width={64} height={240} rx={8} ry={8} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={160} y={240} width={64} height={176} rx={8} ry={8} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={32} y={304} width={64} height={112} rx={8} ry={8} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgCellularOutline;