import React from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./NewsCardStyle";

const NewsCard = ({ urlToImage, title, description, author, url }) => {
  console.log(title);
  return (
    <View style={styles.container}>
      <Image style={styles.imgContainer} source={{ uri: urlToImage }} />

      <View style={styles.aContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text style={styles.titleContainer}>{title}</Text>
        </TouchableOpacity>

        <Text style={styles.descContainer}>{description}</Text>
        <View style={styles.authorContainer}>
          <Text>- {author}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
