import { Text, View, StyleSheet, Image } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";

const image = {
  uri: "https://pbs.twimg.com/profile_images/1495409242228023301/-dzGg6OC_400x400.jpg",
};
const Tweet = ({ tweet }) => {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.profilePicContainer}>
        <Image source={image} style={styles.profilePic} />
      </View>
      <View style={styles.tweetInfo}>
        <View style={styles.tweetHeader}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5, fontSize: 15, fontWeight: "bold" }}>
              {tweet.name}
            </Text>
            <Text style={{ marginRight: 5, color: "gray" }}>{tweet.id}</Text>
            <Text style={{ marginRight: 5, color: "gray" }}>16 Apr 20</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color="gray"
            />
          </View>
        </View>
        <View style={styles.text}>
          <Text style={{ fontSize: 16 }}>{tweet.text}</Text>
        </View>
        <View style={styles.tweetIcons}>
          <View style={styles.tweetIcon}>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={{ paddingLeft: 5 }}>1</Text>
          </View>
          <View style={styles.tweetIcon}>
            <EvilIcons name="retweet" size={24} color="green" />
            <Text style={{ paddingLeft: 5, color: "green" }}>3</Text>
          </View>
          <View style={styles.tweetIcon}>
            <Ionicons name="heart" size={18} color="hotpink" />
            <Text style={{ paddingLeft: 5, color: "hotpink" }}>5</Text>
          </View>
          <View style={styles.tweetIcon}>
            <EvilIcons name="share-google" size={24} color="black" />
            <Text style={{ paddingLeft: 5 }}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  profilePic: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  tweetInfo: {
    flex: 1,
    marginLeft: 5,
  },
  tweetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    //flex: 1,
  },
  tweetIcons: {
    marginTop: 10,
    flexDirection: "row",
  },
  tweetIcon: {
    flexDirection: "row",
    marginRight: 25,
  },
});
export default Tweet;
