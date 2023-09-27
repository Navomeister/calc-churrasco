import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Unchecked = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={36}
    fill="none"
    strokeWidth={5}
    color="#000"
    viewBox="0 0 48 36"
    {...props}
  >
    <Path
      stroke="rgba(255, 255, 255, 0.5)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21L15 33L45 3"
    />
  </Svg>
//   <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M3 21L15 33L45 3" stroke="#44B528" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
  
)
export default Unchecked;