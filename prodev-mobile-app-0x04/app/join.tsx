import { View, Text } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Join Now</Text>
      <Text style={styles.subText}>Create an account to continue</Text>
    </View>
  );
}
