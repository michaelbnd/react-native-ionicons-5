import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTerminalOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={32}
        y={48}
        width={448}
        height={416}
        rx={48}
        ry={48}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M96 112l80 64-80 64M192 240h64"
      />
    </Svg>
  );
}

export default SvgTerminalOutline;
