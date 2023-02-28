import React from 'react';
import { View } from 'react-native';
import tw from '../../styles';
import { P2 } from '../Text';
import Modal from './Modal';
import { GhostButton } from '../Button';

const RemoveGame = ({ modal, description }) => {
  const onOk = () => modal.close();

  return (
    <Modal modalref={modal}>
      <View style={tw`h-75 bg-white rounded-[10px]`}>
        <View style={tw`items-center justify-center flex-1`}>
          <P2 style={tw`my-2 w-3/4 text-center`}>{description}</P2>
          <GhostButton
            onPress={onOk}
            title="OK"
            style={tw`mt-4`}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RemoveGame;
