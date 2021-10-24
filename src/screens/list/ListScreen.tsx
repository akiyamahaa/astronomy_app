import Header from 'components/Header';
import { Box, ScrollView, Text } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CardItem from 'screens/list/components/CardItem';
interface Props {}

const ListScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={{ marginTop: 20 }}>
          <Header headerTitle="Danh sách chỏm sao" />
          <Box style={styles.listContainer}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default ListScreen;
