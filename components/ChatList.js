import { View, Text, FlatList } from "react-native";
import React from "react";
import { ChatItem } from "../components/ChatItem";
import { useRouter } from "expo-router";

export function ChatList({ users }) {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItem
            noBorder={index + 1 === users.length}
            router={router}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
}
