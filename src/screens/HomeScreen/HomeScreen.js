import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GridIconComponent from "../../../assets/icons/GridIconComponent";
import NewIconComponent from "../../../assets/icons/NewIconComponent";
import UserIconComponent from "../../../assets/icons/UserIconComponent";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CustomHeaderComponent from "../../components/Header/Header";

const Tabs = createBottomTabNavigator();

const Home = () => {
    const [isPublications, setIsPublications] = useState(false)
    
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconComponent;
                    let activeColor;
                    let inactiveColor;
                    if (route.name === "Публікації") {
                        iconComponent = <GridIconComponent focused={focused} />;
                    } else if (route.name === "Створити публікацію") {
                        iconComponent = <NewIconComponent focused={focused} />;
                    } else if (route.name === "Profile") {
                        iconComponent = <UserIconComponent  focused={focused} />
                        
                      
                    }


                    return React.cloneElement(iconComponent, {
                        color: focused ? activeColor : inactiveColor,
                    });
                },
                tabBarStyle: {
                    display: "flex",
                    height: 60,
                    paddingTop: 9,
                    paddingBottom: 34,
                },
                tabBarShowLabel: false,
            })}

        >
            <Tabs.Screen
                name="Публікації"
                component={PostsScreen}
                options={{
                    title: "Публікації",
                    header: (props) => (
                        <CustomHeaderComponent title={props.options.title} hideBackButton={true} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Створити публікацію"
                component={CreatePostsScreen}
                options={{
                    tabBarStyle: { display: "none" },
                    title: "Створити публікацію",
                    header: (props) => <CustomHeaderComponent title={props.options.title} />,
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tabs.Navigator>
    );
};

export default Home;
