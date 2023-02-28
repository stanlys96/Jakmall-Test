import React from 'react';

import Base from './Base';

const P2 = ({ children, color = 'text-gray-400', style, ...props }) => (
  <Base {...props} size="text-sm" style={style} color={color}>
    {children}
  </Base>
);

export default P2;
