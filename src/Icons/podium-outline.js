import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPodiumOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M32 160v296a8 8 0 008 8h136V160a16 16 0 00-16-16H48a16 16 0 00-16 16zM320 48H192a16 16 0 00-16 16v400h160V64a16 16 0 00-16-16zM464 208H352a16 16 0 00-16 16v240h136a8 8 0 008-8V224a16 16 0 00-16-16z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgPodiumOutline;