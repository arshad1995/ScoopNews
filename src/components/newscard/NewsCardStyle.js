import { StyleSheet } from "react-native";

const NewsCardStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#dcdcdc",
    flex: 1
  },
  imgContainer: { width: 70, height: 70, margin: 10 },
  aContainer: {
    marginLeft: 10,
    flex: 1
  },
  titleContainer: { color: "blue" },
  //   descContainer: {},
  authorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 5
  }
});

export default NewsCardStyle;
