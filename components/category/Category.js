import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { categories } from "../../constants";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <View className="py-2 pb-5">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 6 }}
        keyExtractor={(item) => item}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setActiveCategory(item)}
            className={`rounded-lg p-1 px-3 mr-2 ${
              activeCategory == item ? "bg-white" : "bg-[#ffffff1a]"
            }`}>
            <Text
              className={activeCategory === item ? "text-black" : "text-white"}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
