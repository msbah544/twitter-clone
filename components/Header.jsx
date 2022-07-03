import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const image = {
  uri: "https://pbs.twimg.com/profile_banners/902874266596716544/1629244493/600x200",
};

const profileImage = {
  uri: "https://pbs.twimg.com/profile_images/1495409242228023301/-dzGg6OC_400x400.jpg",
};

const Header = () => {
  return (
    <View style={styles.header}>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.headerIcons}>
          <View style={styles.leftIcon}>
            <View style={styles.backIcon}>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
            </View>
          </View>
          <View style={styles.breadcrumb}>
            <View style={styles.hIcons}>
              <Ionicons name="search" size={24} color="white" />
            </View>
            <View style={styles.hIcons}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.editButton}>
          <Text style={{ fontWeight: "bold" }}>Edit profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    //backgroundColor: "#1DA1F2", twitter blue color
    //backgroundColor: "hotpink",
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    height: 125,
    resizeMode: "stretch",
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  profileImage: {
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: 50,
    width: 75,
    height: 75,
    marginBottom: 25,
  },
  editButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 105,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    //marginTop: 5,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 10,
  },
  backIcon: {
    backgroundColor: "#3f3e3e",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  hIcons: {
    backgroundColor: "#3f3e3e",
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  breadcrumb: {
    flexDirection: "row",
  },
});

export default Header;
