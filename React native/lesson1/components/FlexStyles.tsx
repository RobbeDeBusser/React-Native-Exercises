import { StyleSheet, View } from 'react-native';

export default function FlexStyles() {
  return (
    <View style={styles.container}>
      <View style={styles.powderblue} />
      <View style={styles.skyblue} />
      <View style={styles.steelblue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  powderblue: {
    height: 60,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    height: 60,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    height: 60,
    backgroundColor: 'steelblue',
  }
});