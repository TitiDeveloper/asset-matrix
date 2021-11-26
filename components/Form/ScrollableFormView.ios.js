import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View } from 'react-native';

const ScrollableFormView = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, ...styles.contentContainer }}
        behavior={'padding'}
        keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{ ...styles.contentContainer, ...props.containerStyle }}>
          {props.children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    // borderColor: 'rebeccapurple',
    // borderWidth: 8
  }
});

export default ScrollableFormView;
