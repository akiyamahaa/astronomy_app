import { useNavigation } from '@react-navigation/core';
import { Box, Image, Text } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title?: string;
  image_uri?: string;
}

const CardItem = (props: Props) => {
  const { image_uri, title } = props;
  const navigation = useNavigation();
  const { width } = Dimensions.get('screen');

  const navigateDetail = () => {};
  return (
    <TouchableOpacity onPress={navigateDetail}>
      <Box style={[styles.root, { width: (width - 40) / 2 }]}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/asotronomy-app.appspot.com/o/gemini-hero.jpeg?alt=media&token=6b672a14-7dc7-4172-80d4-22f1cf8e8ff1',
          }}
          style={styles.imageStyle}
          alt="image"
        />
        <Text p="2" bold>
          Chỏm Bạch Dương
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    alignItems: 'center',
    margin: 6,
    borderWidth: 0.5,
  },
  imageStyle: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default CardItem;
