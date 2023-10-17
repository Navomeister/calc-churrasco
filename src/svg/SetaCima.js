import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SetaCima(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="35px"
      height="35px"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="#000"
      {...props}
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 15l6-6 6 6"
      />
    </Svg>
  )
}

export default SetaCima;
