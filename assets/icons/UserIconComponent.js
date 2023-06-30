import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export const UserIconComponent = ({focused}) => {
   

    return (
        <View
            style={[
                styles.svgContainer,
                { backgroundColor: focused ? "#FF6C00" : "transparent" },
            ]}
        >
            <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
                <G
                    style={[
                        { stroke: focused ? "#ffff" : "#212121CC" },
                    ]}
                   
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeOpacity={0.8}
                    
                >
                    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <Path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clipRule="evenodd" />
                </G>
            </Svg>
        </View>
    );
};

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

export default UserIconComponent;
