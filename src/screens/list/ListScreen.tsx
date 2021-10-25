import { useNavigation, useRoute } from '@react-navigation/core';
import Header from 'components/Header';
import LoadingScreen from 'components/LoadingScreen';
import { Box, ScrollView, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CardItem from 'screens/list/components/CardItem';
import { IDataType, getFirestoreDB, IRoute } from 'utils/utils';

interface Props {}

const ListScreen = (props: Props) => {
  const route = useRoute<IRoute>();
  const navigation = useNavigation();
  const categoryName =
    Object.keys(route.params).length > 0 ? route.params.categoryName : '';
  const [list, setList] = useState<IDataType[]>([] as any);

  const loadData = async () => {
    const result: any = await getFirestoreDB(categoryName);
    if (result.length > 0) {
      setList(result);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box style={{ marginBottom: 80 }}>
          <Header
            headerTitle={`Danh sách các ${categoryName}`}
            onPress={() => navigation.goBack()}
          />
          {list.length > 0 ? (
            <Box style={styles.listContainer}>
              {list.map((item) => (
                <Box key={item.title}>
                  <CardItem item={item} categoryName={categoryName} />
                </Box>
              ))}
            </Box>
          ) : (
            <LoadingScreen />
          )}
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
