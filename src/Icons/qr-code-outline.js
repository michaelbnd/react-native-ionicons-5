import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgQrCodeOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={336} y={336} width={80} height={80} rx={8} ry={8} /><Rect x={272} y={272} width={64} height={64} rx={8} ry={8} /><Rect x={416} y={416} width={64} height={64} rx={8} ry={8} /><Rect x={432} y={272} width={48} height={48} rx={8} ry={8} /><Rect x={272} y={432} width={48} height={48} rx={8} ry={8} /><Rect x={336} y={96} width={80} height={80} rx={8} ry={8} /><Rect x={288} y={48} width={176} height={176} rx={16} ry={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Rect x={96} y={96} width={80} height={80} rx={8} ry={8} /><Rect x={48} y={48} width={176} height={176} rx={16} ry={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Rect x={96} y={336} width={80} height={80} rx={8} ry={8} /><Rect x={48} y={288} width={176} height={176} rx={16} ry={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgQrCodeOutline;