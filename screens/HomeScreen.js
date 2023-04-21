import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cast, Bell, Search } from "react-native-feather";
import Category from "../components/category/Category";
import ShortVideo from "../components/shortVideo/ShortVideo";
import Video, { SuggestedVideo } from "../components/video/Video";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#1b1b1b]">
      <StatusBar backgroundColor="#1b1b1b" animated={true} />
      <SafeAreaView className="flex-row justify-between mx-4 mt-2">
        <View className="flex-row items-center space-x-1">
          <Image
            className="h-7 w-10"
            source={require("../assets/icons/youtubeIcon.png")}
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            YouTube
          </Text>
        </View>

        <View className="flex-row items-center space-x-5">
          <Cast stroke="white" strokeWidth={1.2} height="23" />
          <Bell stroke="white" strokeWidth={1.2} height="23" />
          <Search stroke="white" strokeWidth={1.2} height="23" />
          <Image
            className="rounded-full h-7 w-7"
            source={require("../assets/images/avatar.jpg")}
          />
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1 mt-2" showsVerticalScrollIndicator={false}>
        <Category />

        <SuggestedVideo />

        <ShortVideo />

        <Video />
      </ScrollView>
    </View>
  );
}
