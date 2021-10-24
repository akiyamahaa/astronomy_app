import { useNavigation } from '@react-navigation/core';
import { Box, Image } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

interface Props {}

const LoadingScreen = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateHome = () => {};
    return () => {};
  }, []);
  return (
    <Box style={styles.root}>
      <Image
        style={{ width: '100%', flex: 1 }}
        source={{
          uri: 'https://www.gifcen.com/wp-content/uploads/2021/08/.gif',
        }}
        alt="gif_loading"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default LoadingScreen;
