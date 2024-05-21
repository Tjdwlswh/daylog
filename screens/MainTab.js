import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedsScreen from "./FeedsScreen";
import CalendarScreen from "./CalendarScreen";
import SearchScreen from "./SearchScreen";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchHeader from "../components/SearchHeader";

const Tab = createBottomTabNavigator();
//하단 탭 설정
//해더도 같이 나오는 라이브러리임

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: "#009688",
      }}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
