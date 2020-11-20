import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const heightRatio = screenHeight / 740;
const widthRatio = screenWidth / 360;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 80 * widthRatio,
    marginTop: 100 * heightRatio
  },
  textStyle: {
    fontSize: 20,
    paddingBottom: 10 * widthRatio,
  }
});



export default function UserDetails() {
  const userDetails = useNavigationParam('userDetails');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{`Artist Name : ${userDetails.artistName}`}</Text>
      <Text style={styles.textStyle}>{`Country : ${userDetails.country}`}</Text>
      <Text style={styles.textStyle}>{`Currency : ${userDetails.currency}`}</Text>
      <Text style={styles.textStyle}>{`Primary GenreName : ${userDetails.primaryGenreName}`}</Text>
      <Text style={styles.textStyle}>{`Track Name : ${userDetails.trackName}`}</Text>
    </View>)
}

