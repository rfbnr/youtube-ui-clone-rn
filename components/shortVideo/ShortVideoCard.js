import React from "react";
import { View, Text, Image } from "react-native";
import { MoreVertical } from "react-native-feather";

export default function ShortVideoCard({ item }) {
  return (
    <View className="relative h-80 w-48 mr-4 justify-between flex">
      <Image
        className="w-full h-full rounded-xl absolute"
        source={item.image}
      />
      <View className="flex-row justify-end pt-3 pr-[6px]">
        <MoreVertical stroke="white" strokeWidth={1.5} height="20" />
      </View>

      <View className="p-2">
        <Text className="text-white shadow-xl font-bold text-sm mb-2">
          {item.title}
        </Text>
        <Text className="text-white shadow-lg font-extrabold text-xs">
          {item.viewCount} views
        </Text>
      </View>
    </View>
  );
}
