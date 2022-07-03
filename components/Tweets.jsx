import { View } from "react-native";
import Tweet from "./Tweet";

const Tweets = () => {
  const tweets = [
    {
      name: "Momodou S. Bah",
      id: "@msbah544",
      text: "Silence and Smile are two powerful tools.#Smile is the way to solve many problems and #Silence is the way to avoid many problems. #WITHSTAND",
    },
    {
      name: "Musa Daffeh",
      id: "@mos123",
      text: "Silence and Smile are two powerful tools.#Smile is the way to solve many problems and #Silence is the way to avoid many problems. #WITHSTAND",
    },
    {
      name: "Binta Njie",
      id: "@binjie",
      text: "Silence and Smile are two powerful tools.#Smile is the way to solve many problems and #Silence is the way to avoid many problems. #WITHSTAND",
    },
    {
      name: "Amadou Bailo",
      id: "@ams12",
      text: "Silence and Smile are two powerful tools.#Smile is the way to solve many problems and #Silence is the way to avoid many problems. #WITHSTAND",
    },
  ];
  return (
    <View>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </View>
  );
};

export default Tweets;
