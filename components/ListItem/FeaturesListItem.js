import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '../../constants/Icon';

import PlainText from '../Text/PlainText';

const FeaturesListItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onTap}>
      <View style={{ ...styles.itemContainer, ...props.containerStyle }}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={props.imageSource} />
          </View>

          <View>
            <PlainText style={styles.title}>{props.title}</PlainText>
            <PlainText style={styles.content}>{props.description}</PlainText>
          </View>
        </View>

        <View>
          <Icon name="caret-right" size={12} color="#66737F" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 15,
    marginRight: 7
  },
  title: {
    fontWeight: '700',
    color: '#272D37'
  },
  content: {
    fontSize: 12,
    color: '#66737F'
  }
});

export default FeaturesListItem;
