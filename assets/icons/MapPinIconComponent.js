import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function MapPinIconComponent(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                fillRule="evenodd"
                clipRule="evenodd"
                stroke="#BDBDBD"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M20 10.364C20 16.09 12 21 12 21s-8-4.91-8-10.636C4 6.297 7.582 3 12 3s8 3.297 8 7.364v0z" />
                <Path d="M12 14a3 3 0 100-6 3 3 0 000 6z" />
            </G>
        </Svg>
    )
}

export default MapPinIconComponent
