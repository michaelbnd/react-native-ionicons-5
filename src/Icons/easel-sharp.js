import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEaselSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M468 64H278V32h-44v32H44a12 12 0 00-12 12v280a12 12 0 0012 12h78.19L89.93 470.46l36.53 9.61L161.74 368H234v64h44v-64h71.84l31 111.7 36.83-8.57L389.05 368H468a12 12 0 0012-12V76a12 12 0 00-12-12zm-26 266H70V102h372z" />
      <Path d="M88 120h336v192H88z" />
    </Svg>
  );
}

export default SvgEaselSharp;
