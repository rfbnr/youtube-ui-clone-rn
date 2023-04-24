import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { MoreVertical } from "react-native-feather";
import { videos } from "../../constants";

const VideoCard = ({ video }) => (
  <View>
    <Image source={video.thumbnail} className="h-60 w-full" />
    <View className="flex items-end mr-2 mb-5 -mt-6">
      <View className="bg-black rounded px-1">
        <Text className="text-white font-semibold text-xs">
          {video.duration}
        </Text>
      </View>
    </View>

    <View className="flex-row justify-between items-center pb-8 space-x-3 mx-3">
      <Image source={video.avatar} className="h-9 w-9 rounded-full" />

      <View className="flex-1 space-y-1">
        <Text className="text-white font-semibold">{video.title}</Text>
        <Text className="text-zinc-400 text-xs">
          {`${video.channelTitle} • ${video.viewCount} views • ${video.publishedText}`}
        </Text>
      </View>

      <View className="self-start">
        <MoreVertical stroke="white" strokeWidth={2} height="16" />
      </View>
    </View>
  </View>
);

export function SuggestedVideo() {
  return <VideoCard video={videos[videos.length - 1]} />;
}

export default function Video() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {videos.map((video, index) => (
        <VideoCard video={video} key={index} />
      ))}
    </ScrollView>
  );
}
