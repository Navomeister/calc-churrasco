import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function Espetinho(props) {
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
          <Use xlinkHref="#image0_55_87" transform="scale(.00143)" />
        </Pattern>
        <Image
          id="image0_55_87"
          width={700}
          height={700}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default Espetinho;