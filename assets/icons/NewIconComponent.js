import * as React from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Path, Defs, ClipPath } from "react-native-svg"

const NewIconComponent = ({ focused }) => {
    return (
        <View style={[styles.svgContainer,
        { backgroundColor: focused ? "#FF6C00" : "transparent" }]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={40}
                fill="none"
            >
                <Path
                    style={[
                        { fill: focused ? "#ffff" : "#212121CC" }]}
                    fillRule="evenodd"
                    d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
                    clipRule="evenodd"
                />
                <Defs>
                    <ClipPath id="a">
                        <Path fill='#ffff' d="M0 0h70v40H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    svgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        borderRadius: 20,

    },
});

export default NewIconComponent