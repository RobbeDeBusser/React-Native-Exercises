import { Text, View, StyleSheet } from 'react-native';
import Images from '@/components/Images';
export default function Index() {
  return (
    <View style={styles.container}>
      <Images/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:
  {
    color: '#fff',
  },
});
