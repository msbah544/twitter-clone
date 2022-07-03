import { View, Text, StyleSheet, Linking } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const About = () => {
  return (
    <View style={styles.about}>
      <View style={styles.name}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginRight: 5 }}>
            Momodou S. Bah
          </Text>
          <MaterialIcons name="verified" size={15} color="#1DA1F2" />
        </View>
        <Text style={{ fontSize: 15, color: "gray" }}>@msbah544</Text>
      </View>
      <View style={styles.bio}>
        <Text style={{ fontSize: 16 }}>
          Compt.Sci. student{" "}
          <Text style={{ color: "#1DA1F2" }}>
            @UniOfGambia #InfoSec #ReactDev #JavascriptDev
          </Text>
        </Text>
      </View>
      <View style={styles.generalInfo}>
        <View style={styles.locationAndWebsite}>
          <View style={styles.location}>
            <EvilIcons name="location" size={24} color="gray" />
            <Text style={{ color: "gray", fontSize: 15 }}>Gambia</Text>
          </View>
          <View style={styles.website}>
            <EvilIcons name="link" size={24} color="gray" />
            <Text
              style={{ color: "#1DA1F2", fontSize: 15 }}
              onPress={() => Linking.openURL("https://msbah1.netlify.app")}
            >
              msbah1.netlify.app
            </Text>
          </View>
        </View>
        <View style={styles.dateJoined}>
          <EvilIcons name="calendar" size={24} color="gray" />
          <Text style={{ marginLeft: 3, color: "gray", fontSize: 15 }}>
            Joined August 2017
          </Text>
        </View>
        <View style={styles.followInfo}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>250 </Text>
            <Text style={{ color: "gray", fontSize: 15 }}>Following</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>49 </Text>
            <Text style={{ color: "gray", fontSize: 15 }}>Followers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    marginTop: -25,
    marginHorizontal: 10,
  },
  bio: {
    marginTop: 9,
  },
  locationAndWebsite: {
    flexDirection: "row",
    marginTop: 10,
  },
  location: {
    flexDirection: "row",
  },
  website: {
    flexDirection: "row",
    marginLeft: 10,
  },
  dateJoined: {
    flexDirection: "row",
    marginTop: 10,
  },
  followInfo: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default About;
