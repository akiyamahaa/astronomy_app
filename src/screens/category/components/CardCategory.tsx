import { useNavigation } from '@react-navigation/core';
import { Box, Image, Text } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title?: string;
  image_uri?: string;
  num_list?: number;
}

const CardCategory = (props: Props) => {
  const { image_uri, title, num_list } = props;
  const navigation = useNavigation();
  const { width } = Dimensions.get('screen');

  const navigateList = () => {};
  return (
    <TouchableOpacity onPress={navigateList}>
      <Box style={[styles.root, { width: width - 40 }]}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/asotronomy-app.appspot.com/o/gemini-hero.jpeg?alt=media&token=6b672a14-7dc7-4172-80d4-22f1cf8e8ff1',
          }}
          style={styles.imageStyle}
          alt="image"
        />
        <Text m="2" bold>
          Chỏm Bạch Dương
        </Text>
        <Text m="1">Có 7 loại</Text>
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

export default CardCategory;
