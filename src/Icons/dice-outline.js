import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

function SvgDiceOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M69 153.99l187 110 187-110M256 463.99v-200" /><Ellipse cx={256} cy={152} rx={24} ry={16} /><Ellipse cx={208} cy={296} rx={16} ry={24} /><Ellipse cx={112} cy={328} rx={16} ry={24} /><Ellipse cx={304} cy={296} rx={16} ry={24} /><Ellipse cx={400} cy={240} rx={16} ry={24} /><Ellipse cx={304} cy={384} rx={16} ry={24} /><Ellipse cx={400} cy={328} rx={16} ry={24} /></Svg>;
}

export default SvgDiceOutline;