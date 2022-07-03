import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewTweet = () => {
  return (
    <View style={styles.floatButton}>
      <View style={styles.addTweetIcon}>
        <MaterialCommunityIcons name="plus" size={35} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addTweetIcon: {
    backgroundColor: "#1DA1F2",
    height: 57,
    width: 57,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  floatButton: {
    marginHorizontal: 10,
    position: "absolute",
    bottom: 15,
    right: 10,
  },
});

export default NewTweet;
