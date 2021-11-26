import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, SafeAreaView } from 'react-native';

const ScrollableFormView = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, ...styles.contentContainer }}
        behavior={'padding'}
        keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{ ...styles.contentContainer, ...props.containerStyle }}>
          {props.children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
