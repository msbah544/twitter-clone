import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Tweets from "./components/Tweets";
import NewTweet from "./components/NewTweet";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <About />
        <Navbar />
        <Tweets />
      </ScrollView>
      <NewTweet />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
