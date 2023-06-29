import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GridIconComponent from "../../../assets/icons/GridIconComponent";
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
                    let activeColor;
                    let inactiveColor;
                    let activeColor2;
                    let inactiveColor2;
                   

                    if (route.name === "Створити публікацію") {
                        iconComponent = <NewIconComponent size={size} />;
                        activeColor = "#FF6C00";
                        inactiveColor = "#ffff";
                        activeColor2 = '#ffff';
                        inactiveColor2 = '#212121CC'
                    } else if (route.name === "Публікації") {
                        iconComponent = <GridIconComponent size={size} />;
                        activeColor = "#FF6C00";
                        inactiveColor = "#ffff";
                        activeColor2 = "#FF6C00"
                        inactiveColor2 = "#212121CC"
                       
                    } else if (route.name === "Profile") {
                        iconComponent = <UserIconComponent size={size} />;
                        activeColor = "#FF6C00";
                        inactiveColor = "#212121CC";
                    }

                    return React.cloneElement(iconComponent, {
                        color: focused ? activeColor : inactiveColor,
                        color2: focused ? activeColor2 : inactiveColor2,
                    });
                },
                tabBarStyle: { display: "flex" },
                tabBarShowLabel: false,
            })}
        >
            <Tabs.Screen name="Публікації" component={PostsScreen} />
            <Tabs.Screen name="Створити публікацію" component={CreatePostsScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>
    );
};

export default Home;
