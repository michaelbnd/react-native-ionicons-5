import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatbubble(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M76.83 480a25.69 25.69 0 01-25.57-25.74 29.13 29.13 0 011.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0132 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 01398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 014.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 00-5.37-1 14.75 14.75 0 00-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0176.83 480zm-2-31.8zM87.48 380z" /></Svg>;
}

export default SvgChatbubble;