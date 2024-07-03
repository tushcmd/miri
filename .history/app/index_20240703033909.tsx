import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Tush creating miri!!!</ThemedText>
    </View>
  );
}
