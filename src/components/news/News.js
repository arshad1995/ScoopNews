import React, { Component } from "react";

import { Text, View, ActivityIndicator, FlatList } from "react-native";
import Header from "../header/Header";

import NewsCard from "../newscard/NewsCard";

import styles from "./NewsStyle";

import Button from "../buttons/Button";

class News extends Component {
  componentDidMount() {
    this.props.getNewsList("the-times-of-india");
  }

  render() {
    return (
      <View>
        <Header />
        <Button fetchNews={id => this.props.getNewsList(id)} />
        {this.props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={this.props.news}
            renderItem={({ item }) => <NewsCard {...item} />}
            keyExtractor={item => item.url}
          />
        )}
      </View>
    );
  }
}

export default News;
