import { View, Text } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>
      <Text style={styles.subText}>Welcome back</Text>
    </View>
  );
}
