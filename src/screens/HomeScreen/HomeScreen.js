import React from "react";
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
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused}) => {
                    let iconComponent;
                    let activeColor;
                    let inactiveColor;
                    let activeColor2;
                    let inactiveColor2;

                    if (route.name === "Створити публікацію") {
                        iconComponent = <NewIconComponent />;
                       
                    } else if (route.name === "Публікації") {
                        iconComponent = <GridIconComponent  />;                    
                    } else if (route.name === "Profile") {
                        iconComponent = <UserIconComponent color={activeColor} focused={focused} />;
                        activeColor = "#ffff";
                        inactiveColor = "#212121CC";
                    
                    }

                    return React.cloneElement(iconComponent, {
                        color: focused ? activeColor : inactiveColor,
                        color2: focused ? activeColor2 : inactiveColor2,
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
                    header: (props) => <CustomHeaderComponent title={props.options.title} hideBackButton={true} />,
                }}
            />
            <Tabs.Screen
                name="Створити публікацію"
                component={CreatePostsScreen}
                options={{
                    tabBarStyle: { display: 'none' },
                    title: "Створити публікацію",
                    header: (props) => <CustomHeaderComponent title={props.options.title} />,
                }}
                
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen} 
                options={{
                    headerShown: false // Скрыть заголовок для этого экрана
                }}

                />
        </Tabs.Navigator>
    );
};

export default Home;
