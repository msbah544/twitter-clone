import { Text, View, StyleSheet } from "react-native";
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navcustom}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingHorizontal: 10,
          }}
        >
          Tweets
        </Text>
      </View>
      <View style={styles.nav}>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", paddingHorizontal: 10 }}
        >
          Tweets {"&"} Replies
        </Text>
      </View>
      <View style={styles.nav}>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", paddingHorizontal: 10 }}
        >
          Media
        </Text>
      </View>
      <View style={styles.nav}>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", paddingHorizontal: 10 }}
        >
          Likes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  nav: {
    //backgroundColor: "yellow",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 3,
    //borderColor: "#1DA1F2",
    /*borderBottomColor: "#1DA1F2",
    borderBottomWidth: 3,*/
    //borderTopWidth: 0,
    //borderLeftWidth: 0,
    //borderRightWidth: 0,
  },
  navcustom: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#1DA1F2",
    borderBottomWidth: 3,
  },
});
export default Navbar;
