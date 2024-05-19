import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
