import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function Suco(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H50V50H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_55_91" transform="scale(.00143)" />
        </Pattern>
        <Image
          id="image0_55_91"
          width={700}
          height={700}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default Suco;
