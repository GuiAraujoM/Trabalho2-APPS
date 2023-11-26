
import { useEffect } from "react";
import {
  TweetContainer,
  TweetColumn,
  TweetText,
  TweetMediaContainer,
  TweetProfilePhotoContainer,
  TweetDetailsContainer,
  TweetImage,
  TweetMedia,
  TweetCustomBorder,
  TweetAction,
  TweetActionsContainer
} from "./TweetStyles";

import { Image, View, StyleSheet, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-paper";

import profilePhoto from "../../../assets/profile_photo1_400x400.jpg";
import tweetImage from "../../../assets/tweet_image.png";

const onPressComments = (value) => {
  console.log("comment pressed")
}

const onPressInSetBlue = (value) => {
  let children = [...value.currentTarget.children];
  children.forEach((child) => (child.style.color = "#1d9bf0"));
};

const onPressInSetRed = (value) => {
  let children = [...value.currentTarget.children];
  children.forEach((child) => (child.style.color = "#f91880"));
};

const onPressOut = (value) => {
  let children = [...value.currentTarget.children];
  children.forEach((child) => (child.style.color = "#71767b"));
};

export default function TweetCard() {
    return (
      <View>
        <TweetContainer>
          <TweetColumn width="10%" marginRight="12px">
            <TweetProfilePhotoContainer>
              <TweetImage source={profilePhoto} borderRadius="50%"></TweetImage>
            </TweetProfilePhotoContainer>
          </TweetColumn>
          <TweetColumn width="90%">
            <TweetDetailsContainer>
              <TweetText color="#e7e9ea" marginRight="4px" fontWeight="bold">
                MetSul Meteorologia
              </TweetText>
              <TweetText color="#71767b" marginRight="4px">
                @metsul
              </TweetText>
              <TweetText color="#71767b" marginRight="4px">
                ·
              </TweetText>
              <TweetText color="#71767b">8h</TweetText>
            </TweetDetailsContainer>
            <View>
              <TweetText color="#e7e9ea">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac convallis sem. Donec quis sodales est. Etiam posuere accumsan
                ante et iaculis. In quis rutrum felis, eget vulputate purus.
                Pellentesque efficitur posuere dui, ultrices pretium nulla
                vehicula eget. Duis ullamcorpera
              </TweetText>
            </View>
            <TweetMediaContainer>
              <TweetMedia source={tweetImage}></TweetMedia>
            </TweetMediaContainer>
            <TweetActionsContainer>
              <TweetAction
                onPress={onPressComments}
                onPressIn={onPressInSetBlue}
                onPressOut={onPressOut}
              >
                <Icon source="comment-outline" color="#71767b" size={20} />
                <TweetText color="#71767b">123</TweetText>
              </TweetAction>
              <TweetAction onPressIn={onPressInSetBlue} onPressOut={onPressOut}>
                <Icon source="repeat-variant" color="#71767b" size={20} />
                <TweetText color="#71767b">123</TweetText>
              </TweetAction>
              <TweetAction onPressIn={onPressInSetRed} onPressOut={onPressOut}>
                <Icon source="heart-outline" color="#71767b" size={20} />
                <TweetText color="#71767b">123</TweetText>
              </TweetAction>
              <TweetAction onPressIn={onPressInSetBlue} onPressOut={onPressOut}>
                <Icon source="poll" color="#71767b" size={20} />
                <TweetText color="#71767b">123</TweetText>
              </TweetAction>
              <TweetAction onPressIn={onPressInSetBlue} onPressOut={onPressOut}>
                <Icon source="bookmark-outline" color="#71767b" size={20} />
              </TweetAction>
            </TweetActionsContainer>
          </TweetColumn>
        </TweetContainer>
        <TweetCustomBorder></TweetCustomBorder>
      </View>
    );
}