import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  headerTitle: string;
}

const Header = (props: Props) => {
  const { headerTitle } = props;
  return (
    <Box style={styles.headerContainer} p="2">
      <Text fontSize={20} bold>
        {headerTitle}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginTop:10
  },
});

export default Header;
