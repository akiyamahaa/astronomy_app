import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Container, Image, ScrollView, Text } from 'native-base';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'utils/firebase';
import { SafeAreaView } from 'react-native';
import Header from 'components/Header';

interface Props {}

const DetailScreen = (props: Props) => {
  const [info, setInfo] = useState<any>({
    title: '',
    description: '',
    image: null,
  });
  const getData = async () => {
    const resultCol = collection(db, 'astrology');
    const resultSnapshot = await getDocs(resultCol);
    const resultList = resultSnapshot.docs.map((doc: any) => doc.data());
    setInfo(resultList[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Box pb='10'>
          <Header headerTitle="Chỏm Bạch Dương" />
          {Boolean(info.image) && (
            <Image
              source={{ uri: info.image }}
              style={{ width: '100%', height: 200 }}
              alt="image_star"
            />
          )}
          <Box alignItems="center">
            <Text bold fontSize={32} m="2">
              {info.title}
            </Text>
            <Text italic fontSize={18} color="#9cdfb7">
              Cung hoàng đạo
            </Text>
            <Button
              m="2"
              borderRadius={20}
              width="60%"
              size="lg"
              variant="outline"
              onPress={() => {}}
            >
              CHƠI GHÉP HÌNH
            </Button>
          </Box>
          <Box alignItems="center" mt="2">
            <Container>{info.description}</Container>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
