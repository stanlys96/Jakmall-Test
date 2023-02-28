import React, { useRef, useEffect } from 'react';
import { Keyboard, View, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Portal } from 'react-native-portal-host';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Backdrop } from './Modal';
import tw from '../../styles';

const snapPoints = ['99%'];

const Modal = ({
  children,
  modalref,
  defaultOpen = false,
  enableClickOutsideToClose = true,
  ...props
}) => {
  const bottomSheet = useRef();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    modalref.open = onOpen;
    modalref.close = onClose;
    modalref.current = "Value";
  }, [modalref, bottomSheet]);

  const onStateChange = (index) => {
    if (index === -1) Keyboard.dismiss();
  };

  const onOpen = () => bottomSheet.current?.snapToIndex(0);
  const onClose = () => bottomSheet.current?.close();

  const handleClose = () => {
    if (enableClickOutsideToClose) bottomSheet.current?.close();
  };

  return (
    <Portal style={tw`absolute inset-0 flex`}>
      <BottomSheet
        {...props}
        enablePanDownToClose
        index={defaultOpen ? 0 : -1}
        ref={bottomSheet}
        topInset={insets.top}
        handleComponent={null}
        snapPoints={snapPoints}
        onChange={onStateChange}
        keyboardBehavior="extend"
        bottomInset={insets.bottom}
        backdropComponent={Backdrop}
        backgroundStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <TouchableOpacity onPress={handleClose} style={tw`flex-1`}>
          <View style={tw`my-auto rounded-xl mx-4 px-4`}>{children}</View>
        </TouchableOpacity>
      </BottomSheet>
    </Portal>
  );
};

export default Modal;
