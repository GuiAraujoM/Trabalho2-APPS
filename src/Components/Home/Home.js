import { useEffect, useState } from "react";

import TweetCard from "./TweetCard";
import { TweetListContainer } from "./TweetStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
      <TweetListContainer>
        <TweetCard></TweetCard>
        <TweetCard></TweetCard>
        <TweetCard></TweetCard>
        <TweetCard></TweetCard>
      </TweetListContainer>
    </ScrollView>
  );
}
