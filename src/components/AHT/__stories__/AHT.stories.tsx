import React from 'react';
import AHT from '../AHT';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

const withPadding = (story: () => boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => (
  <div style={{ minHeight: 480 }}>{story()}</div>
);

export default {
  title: 'Atoms/AHT',
  component: AHT,
  decorators: [withPadding],
  argTypes: {
    color: 'primary',
  },
};

export const AHTDefault = () => <AHT>TextArea</AHT>;
