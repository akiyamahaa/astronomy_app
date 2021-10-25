import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { Icons } from './Icons';

interface Props {
  headerTitle: string;
  onPress?: () => void;
  hasBackButton?: boolean;
}

const Header = (props: Props) => {
  const { headerTitle, onPress, hasBackButton = true } = props;
  return (
    <Box style={styles.headerContainer} p="2" mt="5">
      {hasBackButton && (
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
          <Icon type={Icons.AntDesign} name="leftcircleo" />
        </TouchableOpacity>
      )}
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
  },
  btnStyle: {
    position: 'absolute',
    left: 20,
    top: '35%',
  },
});

export default Header;
