import * as React from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Path } from "react-native-svg"

function TrashIconComponent(props) {
    return (
        
        <View style={styles.svgContainer}>
            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path
                    d="M3 6h18"
                    stroke="#BDBDBD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M19.5 6a.5.5 0 00-1 0h1zm-14 0a.5.5 0 00-1 0h1zm2 0a.5.5 0 001 0h-1zm8 0a.5.5 0 001 0h-1zm3 0v14h1V6h-1zm0 14a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM17 21.5H7v1h10v-1zm-10 0A1.5 1.5 0 015.5 20h-1A2.5 2.5 0 007 22.5v-1zM5.5 20V6h-1v14h1zm3-14V4h-1v2h1zm0-2A1.5 1.5 0 0110 2.5v-1A2.5 2.5 0 007.5 4h1zM10 2.5h4v-1h-4v1zm4 0A1.5 1.5 0 0115.5 4h1A2.5 2.5 0 0014 1.5v1zM15.5 4v2h1V4h-1z"
                    fill="#BDBDBD"
                />
                <Path
                    d="M10 11v6M14 11v6"
                    stroke="#BDBDBD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
      </View>
    )
}

const styles = StyleSheet.create({
    svgContainer: {
        marginTop: 120,
        alignSelf: 'center',
        backgroundColor: '#F6F6F6',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        borderRadius: 20,

    },
});

export default TrashIconComponent
