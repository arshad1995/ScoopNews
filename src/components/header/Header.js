import React from "react";
import { Text, View } from "react-native";
import styles from "./HeaderStyle";
import { NEWS } from "../../utils/constants";

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>{NEWS}</Text>
    </View>
  );
};

export default Header;
