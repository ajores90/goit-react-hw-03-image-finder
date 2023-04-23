import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import clsx from 'clsx';

const Spinner = () => {
  return (
    <div className={clsx('Loader')}>
      <ThreeDots color="#3f51b5" height={120} width={120} />
    </div>
  );
};

export default Spinner;
