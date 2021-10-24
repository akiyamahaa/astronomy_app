import Header from 'components/Header';
import { Box, ScrollView } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CardCategory from './components/CardCategory';

interface Props {}

const CategoryScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={{ marginTop: 20 }}>
          <Header headerTitle="Các loại hành tinh" />
          <Box style={styles.listContainer}>
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 180,
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
  listContainer: {
    alignItems: 'center',
  },
});

export default CategoryScreen;
