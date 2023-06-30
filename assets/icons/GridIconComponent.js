import * as React from "react"
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Svg, {  Path } from "react-native-svg"
const GridIconComponent = ({ focused }) => {
    return (
        <View
            style={[styles.svgContainer,
        { backgroundColor: focused ? "#FF6C00" : "transparent" }]}>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill='transparent'
                
            >
                <Path fill="transparent" d="M0 0h24v24H0z" />
                <Path
                    style={[
                        { stroke: focused ? "#fff" : "#212121CC" }]}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeOpacity={0.8}
                    d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
                    clipRule="evenodd"
                />
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
export default GridIconComponent