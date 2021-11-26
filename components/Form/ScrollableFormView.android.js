import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet } from 'react-native';

const ScrollableFormView = (props) => {
  return (
    <ScrollView contentContainerStyle={{ ...styles.contentContainer, ...props.containerStyle }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        contentContainerStyle={{ flex: 1 }}
        behavior={null}>
        {props.children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1, 
  }
});

export default ScrollableFormView;
