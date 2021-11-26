import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PlainText = (props) => {
  const textStyle = { ...styles.text };

  // switch (props.font) {
  //   case 'thin':
  //     textStyle.fontFamily = 'gotham-thin';
  //     break;

  //   case 'xtra-light':
  //     textStyle.fontFamily = 'gotham-xlight';
  //     break;

  //   case 'light':
  //     textStyle.fontFamily = 'gotham-light';
  //     break;

  //   case 'medium':
  //     textStyle.fontFamily = 'gotham-medium';
  //     break;

  //   case 'bold':
  //     textStyle.fontFamily = 'gotham-bold';
  //     break;

  //   case 'book':
  //     textStyle.fontFamily = 'gotham-book';
  //     break;

  //   case 'black':
  //     textStyle.fontFamily = 'gotham-black';
  //     break;

  //   default:
  //     textStyle.fontFamily = 'gotham-book';
  //     break;
  // }

  return (
    <Text
      style={{
        ...textStyle,
        ...props.style
      }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 16
  }
});

export default PlainText;
