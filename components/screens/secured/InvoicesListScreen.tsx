import React, { useEffect } from 'react';
import { HStack, Text, VStack, Image, Button, ScrollView, Box, Link } from 'native-base';
import DashboardLayout from '../../../layouts/DashboardLayout';
import { BASE_API_URL } from '../../../constants/constants';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import { Dimensions } from 'react-native';

type InvoiceCardProps = {
  item: IInvoice;
  key: number;
  downloadFile: (url: string, fileName: string) => void;
};

const InvoiceCard: React.FC<InvoiceCardProps> = ({ item, key, downloadFile }) => {
  return (
    <Box
      _light={{ bg: 'coolGray.100' }}
      _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.700' } }}
      p={{ base: 3, md: 4 }}
      borderRadius="sm"
    >
      {/*This could be useful if we want to add an status*/}
      {/*<HStack alignItems="center" justifyContent="space-between">*/}
      {/*  <Text fontSize="xs" _dark={{ color: 'coolGray.50' }} fontWeight="normal">*/}
      {/*    {item.orderId}*/}
      {/*  </Text>*/}
      {/*  <Text*/}
      {/*    fontSize="xs"*/}
      {/*    fontWeight="medium"*/}
      {/*    _light={{ color: item.deliveryColor }}*/}
      {/*    _dark={{ color: item.deliveryColor }}*/}
      {/*  >*/}
      {/*    {item.delivery}*/}
      {/*  </Text>*/}
      {/*</HStack>*/}
      <HStack alignItems="center" mt="3" space="3">
        <Box>
          <Link href="#">
            <Text
              fontSize="md"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
            >
              {item.period}
            </Text>
          </Link>

          <Text fontSize="sm" _light={{ color: 'coolGray.500' }} _dark={{ color: 'coolGray.400' }}>
            {item.fileName}
          </Text>
          <Text fontSize="sm" _light={{ color: 'coolGray.500' }} _dark={{ color: 'coolGray.400' }}>
            500
          </Text>
          <Text
            mt={0.5}
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {item.ammount}
          </Text>
        </Box>
      </HStack>
      <HStack mt="5" space="3">
        <Button
          variant="solid"
          size="xs"
          _text={{ fontWeight: 'medium' }}
          onPress={() => downloadFile(item.downloadUrl, item.fileName)}
        >
          Descargar
        </Button>
        <Button
          variant="outline"
          _light={{ borderColor: 'coolGray.400' }}
          _dark={{ borderColor: 'coolGray.400' }}
          size="xs"
          _text={{ fontWeight: 'medium', color: 'secondary.400' }}
        >
          Pagar
        </Button>
      </HStack>
    </Box>
  );
};

const InvoicesListScreen: React.FC<any> = ({ navigation }) => {
  const [invoices, setInvoices] = React.useState<IInvoice[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const downloadFile = (fileUrl: string, fileName: string) => {
    const action = async () => {
      setLoading(true);
      const fileUri = FileSystem.documentDirectory + fileName;
      const downloadObject = FileSystem.createDownloadResumable(fileUrl, fileUri);
      await downloadObject.downloadAsync();
    };
    action()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    const getInvoices = async () => {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.get<ListInvoiceResponse>(`${BASE_API_URL}/invoices`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    };
    setLoading(true);
    getInvoices()
      .then((response) => {
        setLoading(false);
        setInvoices(response);
      })
      .catch((error) => {
        setLoading(false);
        console.error(JSON.stringify(error));
      });
  }, []);

  return (
    <>
      <DashboardLayout title="Facturas" navigation={navigation}>
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
          <VStack
            px={{ base: 4, md: 8, lg: '140' }}
            pt={{ base: 5, md: 8 }}
            pb={{ base: 4, md: 8 }}
            rounded={{ md: 'sm' }}
            _light={{ bg: 'white' }}
            _dark={{
              bg: { md: 'coolGray.800', base: 'coolGray.700' },
            }}
            space="4"
          >
            {invoices.map((item, index) => {
              return <InvoiceCard key={index} item={item} downloadFile={downloadFile} />;
            })}
          </VStack>
        </ScrollView>
      </DashboardLayout>
    </>
  );
};
export { InvoicesListScreen };
