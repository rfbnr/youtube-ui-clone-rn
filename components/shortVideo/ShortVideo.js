import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import ShortVideoCard from "./ShortVideoCard";
import { shortVideos } from "../../constants";

export default function ShortVideo() {
  return (
    <View className="mt-2 py-5 space-y-3 border-t-zinc-600 border-b-zinc-600 border-[6px] border-l-0 border-r-0">
      <View className="mx-4 mb-2 flex-row items-center space-x-2">
        <Image
          className="w-5 h-6"
          source={require("../../assets/icons/shortsIcon.png")}
        />
        <Text className="text-white tracking-tighter font-semibold text-lg">
          Shorts
        </Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
        keyExtractor={(item) => item.id}
        data={shortVideos}
        renderItem={({ item }) => <ShortVideoCard item={item} />}
      />
    </View>
  );
}
