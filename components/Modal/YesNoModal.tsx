import React from 'react';
import { Text, VStack, Avatar, Button, Modal } from 'native-base';

type ModalProps = {
  modalVisible: boolean;
  yesAction?: () => void;
  message: React.ReactNode;
  noAction?: () => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const YesNoModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
  yesAction,
  noAction,
  message,
}) => {
  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size="md">
      <Modal.Content _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.800' }}>
        <Modal.CloseButton
          m={0}
          p={0}
          mt={2}
          mr={1}
          _hover={{ bg: 'transparent' }}
          _pressed={{ bg: 'transparent' }}
          _icon={{ size: 'md' }}
        />
        <Modal.Body p={4}>
          <VStack justifyContent="center" alignItems="center">
            <Text py="4" textAlign="center">
              {message}
            </Text>
            <Button.Group mt="3" space="4" w="100%" justifyContent="center">
              <Button
                variant="solid"
                flex={1}
                size="md"
                onPress={yesAction ? yesAction : () => setModalVisible(false)}
              >
                Si
              </Button>
              <Button
                flex={1}
                size="md"
                variant="outline"
                onPress={noAction ? noAction : () => setModalVisible(false)}
                _light={{
                  borderColor: 'secondary.400',
                  _text: {
                    color: 'secondary.400',
                  },
                  _hover: {
                    bg: 'secondary.600:alpha.10',
                    borderColor: 'secondary.400',
                  },
                  _pressed: {
                    bg: 'secondary.600:alpha.10',
                    borderColor: 'secondary.400',
                  },
                }}
                _dark={{
                  borderColor: 'secondary.400',
                  _text: {
                    color: 'secondary.400',
                  },
                  _hover: {
                    bg: 'secondary.500:alpha.10',
                    borderColor: 'secondary.400',
                  },
                  _pressed: {
                    bg: 'secondary.500:alpha.10',
                    borderColor: 'secondary.400',
                  },
                }}
              >
                No
              </Button>
            </Button.Group>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export { YesNoModal };
