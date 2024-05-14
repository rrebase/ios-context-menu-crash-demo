import { Pressable, Text, View } from "react-native";

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { ContextMenuView } from "react-native-ios-context-menu";

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContextMenuView
        menuConfig={{
          menuTitle: "ContextMenuViewExample01",
          menuItems: [
            {
              actionKey: "key-01",
              actionTitle: "Action #1",
            },
          ],
        }}
        onPressMenuItem={({ nativeEvent }) => {
          // noop
        }}
      >
        <Pressable
          style={{
            width: 100,
            height: 100,
            backgroundColor: "lime",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
          onPress={() => {
            // @ts-expect-error: not typed
            navigation.navigate("details");
          }}
        >
          <Text style={{ color: "blue", fontSize: 24 }}>Go</Text>
        </Pressable>
      </ContextMenuView>
    </View>
  );
};

const Details = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ color: "blue", fontSize: 24 }}>DETAILS</Text>
  </View>
);

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}
