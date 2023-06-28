// Home.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import GridIconComponent from '../../../assets/icons/GridIconComponent'
import NewIconComponent from "../../../assets/icons/NewIconComponent";
import UserIconComponent from "../../../assets/icons/UserIconComponent";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";





const Tabs = createBottomTabNavigator();
const Home = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconComponent;
                    if (route.name === "CreatePosts") {
                        iconComponent = (
                            <NewIconComponent
                                color={color}
                                size={size}
                            />
                        );
                    } else if (route.name === "Posts") {
                        iconComponent = (
                            <GridIconComponent color={color} size={size} />
                        );
                    } else if (route.name === "Profile") {
                        iconComponent = (
                            <UserIconComponent
                                color={color}
                                size={size}
                            />
                        );
                    }
                    return iconComponent;
                },
                tabBarActiveTintColor: "#FF6C00",
                tabBarInactiveTintColor: "#212121CC",
                tabBarStyle: [{ display: "flex" }, null],
                tabBarShowLabel: false,
                
            })}
        >
            <Tabs.Screen name="Posts" component={PostsScreen} />
            <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Home;



