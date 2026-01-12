import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your favorite place here</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>The best prices for over 2</Text>
            <Text style={styles.titleSubText}>million properties worldwide</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/join")}>
          <Text style={styles.buttonPrimaryText}>Join here</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/signin")}>
          <Text style={styles.buttonSecondaryText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
