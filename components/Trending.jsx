import {
  FlatList,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, React } from "react";
import * as Animatable from "react-native-animatable";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
