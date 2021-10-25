import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Image, ScrollView, Text } from 'native-base';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'utils/firebase';
import { SafeAreaView } from 'react-native';
import Header from 'components/Header';
import { useNavigation, useRoute } from '@react-navigation/core';
import { getFirestoreDB, IDataType, IRoute } from 'utils/utils';
import LoadingScreen from 'components/LoadingScreen';

interface Props {}

const DetailScreen = (props: Props) => {
  const route = useRoute<IRoute>();
  const navigation = useNavigation<any>();
  const categoryName =
    Object.keys(route.params).length > 0 ? route.params.categoryName : '';
  const itemId =
    Object.keys(route.params).length > 0 ? route.params.itemId : '';

  const [info, setInfo] = useState<IDataType>({} as any);

  const getData = async () => {
    const result = await getFirestoreDB(categoryName);
    setInfo(result.filter((item) => item.id === itemId)[0] as any);
  };

  const navigateGame = () => {
    navigation.navigate('Game', { item: info });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={{ marginBottom: 80 }}>
          <Header
            headerTitle="Chỏm Bạch Dương"
            onPress={() => navigation.goBack()}
            hasBackButton
          />
          {Object.keys(info).length > 0 ? (
            <>
              <Image
                source={{ uri: info.image }}
                style={{ width: '100%', height: 200 }}
                alt="image_star"
              />
              <Box alignItems="center">
                <Text bold fontSize={32} m="2">
                  {info.title}
                </Text>
                <Text
                  italic
                  fontSize={18}
                  color="#9cdfb7"
                  textTransform="uppercase"
                >
                  {categoryName}
                </Text>
                <Button
                  m="2"
                  borderRadius={20}
                  width="60%"
                  size="lg"
                  variant="outline"
                  onPress={navigateGame}
                >
                  CHƠI GHÉP HÌNH
                </Button>
              </Box>
              <Box alignItems="center" mt="2">
                <Container>{info.description}</Container>
              </Box>
            </>
          ) : (
            <LoadingScreen />
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
