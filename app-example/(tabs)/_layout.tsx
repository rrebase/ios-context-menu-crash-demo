import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={() => (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>hello</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
}

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? "home" : "home-outline"}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? "code-slash" : "code-slash-outline"}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
