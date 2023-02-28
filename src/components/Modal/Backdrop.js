import React from 'react';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const Backdrop = (props) => (
  <BottomSheetBackdrop {...props} opacity={0.8} pressBehavior="close" disappearsOnIndex={-1} />
);

export default Backdrop;
