import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const botamiURL = 'https://crm.botami.vn/#Case';

const Webview = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: botamiURL}}
      />
    </View>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
});
